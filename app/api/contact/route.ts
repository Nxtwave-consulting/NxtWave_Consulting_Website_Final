import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, interest, message, recipient } = body

    // Use the specified recipient or default to kris@nxtwave-consulting.com
    const emailRecipient = recipient || "kris@nxtwave-consulting.com"

    // Format the email content as requested
    const emailContent = `
First Name | Last Name
${firstName} | ${lastName}

Company | Email
${company || "Not provided"} | ${email}

I'm interested In | Message
${interest || "Not specified"} | ${message || "No message provided"}
    `.trim()

    // Here you would integrate with your email service (SendGrid, Resend, etc.)
    // For now, we'll just log the form data and return success
    console.log(`Contact form submission for ${emailRecipient}:`)
    console.log(emailContent)
    console.log("Metadata:", {
      timestamp: new Date().toISOString(),
      recipient: emailRecipient,
      formType: "Book a Free Discovery Call",
    })

    // In a real implementation, you would send the email here
    // Example with a hypothetical email service:
    // await emailService.send({
    //   to: emailRecipient,
    //   from: 'noreply@nxtwave-consulting.com',
    //   subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    //   text: emailContent,
    //   html: `
    //     <div style="font-family: monospace; white-space: pre-line;">
    //       ${emailContent.replace(/\n/g, '<br>')}
    //     </div>
    //   `
    // })

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, message: "Sorry, there was an error sending your message. Please try again." },
      { status: 500 },
    )
  }
}
