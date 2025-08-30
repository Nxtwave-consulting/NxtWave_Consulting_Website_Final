import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, interest, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json({ success: false, message: "Please fill in all required fields." }, { status: 400 })
    }

    // Create the HTML email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #0c9488; margin-bottom: 20px; border-bottom: 2px solid #0c9488; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <p style="color: #666; margin-bottom: 20px; font-style: italic;">Book a Free Discovery Call</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold; width: 30%;">First Name</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${firstName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Last Name</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${lastName}</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Email</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">
                <a href="mailto:${email}" style="color: #0c9488; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Company</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${company || "Not provided"}</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Interested In</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${interest || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold; vertical-align: top;">Message</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${message || "No message provided"}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f5f3; border-radius: 4px; border-left: 4px solid #0c9488;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Submitted:</strong> ${new Date().toLocaleString()}<br>
              <strong>Source:</strong> NXT Wave Consulting Website - Contact Form
            </p>
          </div>
        </div>
      </div>
    `

    // Create plain text version
    const emailText = `
New Contact Form Submission - Book a Free Discovery Call

First Name | Last Name
${firstName} | ${lastName}

Company | Email
${company || "Not provided"} | ${email}

I'm interested In | Message
${interest || "Not specified"} | ${message || "No message provided"}

---
Submitted at: ${new Date().toLocaleString()}
Form Type: Book a Free Discovery Call
Source: NXT Wave Consulting Website - Contact Form
    `.trim()

    // Send email using Resend API with default domain
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "NXT Wave Consulting <onboarding@resend.dev>", // Using Resend's default domain
        to: ["kris@nxtwave-consulting.com"],
        subject: `New Discovery Call Request from ${firstName} ${lastName}`,
        html: emailHtml,
        text: emailText,
        reply_to: email,
      }),
    })

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text()
      console.error("Resend API error:", errorData)
      throw new Error(`Failed to send email via Resend: ${resendResponse.status}`)
    }

    const result = await resendResponse.json()
    console.log("Email sent successfully via Resend:", result)

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Email sending error:", error)

    // Return different error messages based on the error type
    if (error instanceof Error) {
      if (error.message.includes("401") || error.message.includes("unauthorized")) {
        return NextResponse.json(
          { success: false, message: "Email service configuration error. Please try again later." },
          { status: 500 },
        )
      }
      if (error.message.includes("429")) {
        return NextResponse.json(
          { success: false, message: "Too many requests. Please try again in a few minutes." },
          { status: 429 },
        )
      }
    }

    return NextResponse.json(
      { success: false, message: "Sorry, there was an error sending your message. Please try again." },
      { status: 500 },
    )
  }
}
