class Notification {
    constructor(notificationId, createdTime, content, receiver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }

    send() {
        console.log(`Notification has been sent to ${this.receiver}`);
    }
}

class EmailNotification extends Notification { }

class SMSNotification extends Notification { }

const emailNotification = new EmailNotification("123", "18:30", "Hello", "hello@gmail.com");
const smsNotification = new SMSNotification("987", "19:00", "Good Bye", "0822222222");

emailNotification.send();
smsNotification.send();
