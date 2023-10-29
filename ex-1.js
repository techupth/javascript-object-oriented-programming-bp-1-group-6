class EmailNotification {
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

class SMSNotification {
    constructor(notificationId, createdTime, content, phoneNumber) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }

    send() {
        console.log(`Notification has been sent to ${this.phoneNumber}`);
    }
}

const emailNotification = new EmailNotification("123", "18:30", "Hello", "hello@gmail.com");
const smsNotification = new SMSNotification("987", "19:00", "Good Bye", "0822222222");

emailNotification.send();
smsNotification.send();