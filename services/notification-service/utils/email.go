package utils

import (
    "net/smtp"
    "fmt"
    "os"
)

func SendEmail(to string, subject string, body string) error {
    from := "galileoelearning@gmail.com"
    password := os.Getenv("SMTP_PASSWORD")  // Lee de variables de entorno

    smtpServer := "smtp.gmail.com"
    smtpPort := "587"

    msg := "From: " + from + "\n" +
        "To: " + to + "\n" +
        "Subject: " + subject + "\n\n" +
        body

    err := smtp.SendMail(smtpServer+":"+smtpPort,
        smtp.PlainAuth("", from, password, smtpServer),
        from, []string{to}, []byte(msg))

    if err != nil {
        return fmt.Errorf("failed to send email: %v", err)
    }
    return nil
}