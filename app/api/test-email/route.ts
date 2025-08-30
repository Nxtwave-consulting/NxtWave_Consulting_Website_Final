import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // Test email data
    const testData = {
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      company: "Test Company",
      interest: "GTM Strategy",
      message: "This is a test message to verify the email system is working correctly with Resend.",
    }

    // Create the HTML email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #dc2626; margin-bottom: 20px; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            🧪 TEST EMAIL - New Contact Form Submission
          </h2>
          <p style="color: #666; margin-bottom: 20px; font-style: italic; background-color: #fef2f2; padding: 10px; border-radius: 4px;">
            <strong>This is a test email to verify the Resend email system is working correctly.</strong>
          </p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold; width: 30%;">First Name</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${testData.firstName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Last Name</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${testData.lastName}</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Email</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">
                <a href="mailto:${testData.email}" style="color: #0c9488; text-decoration: none;">${testData.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Company</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${testData.company}</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Interested In</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${testData.interest}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold; vertical-align: top;">Message</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${testData.message}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fef2f2; border-radius: 4px; border-left: 4px solid #dc2626;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>🧪 TEST SUBMISSION</strong><br>
              <strong>Submitted:</strong> ${new Date().toLocaleString()}<br>
              <strong>Source:</strong> NXT Wave Consulting Website - Email System Test (Resend)
            </p>
          </div>
        </div>
      </div>
    `

    // Create plain text version
    const emailText = `
🧪 TEST EMAIL - Book a Free Discovery Call

This is a test email to verify the Resend email system is working correctly.

First Name | Last Name
${testData.firstName} | ${testData.lastName}

Company | Email
${testData.company} | ${testData.email}

I'm interested In | Message
${testData.interest} | ${testData.message}

---
Submitted at: ${new Date().toLocaleString()}
Form Type: Book a Free Discovery Call (TEST)
Source: NXT Wave Consulting Website - Email System Test (Resend)
    `.trim()

    // Send test email using Resend API with default domain
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "NXT Wave Consulting <onboarding@resend.dev>", // Using Resend's default domain
        to: ["kris@nxtwave-consulting.com"],
        subject: `🧪 TEST - New Discovery Call Request from ${testData.firstName} ${testData.lastName}`,
        html: emailHtml,
        text: emailText,
        reply_to: testData.email,
      }),
    })

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text()
      console.error("Resend API error:", errorData)
      throw new Error(`Failed to send test email via Resend: ${resendResponse.status}`)
    }

    const result = await resendResponse.json()
    console.log("Test email sent successfully via Resend:", result)

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully via Resend!",
      messageId: result.id,
      testData,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Test email error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Test email failed",
        error: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
