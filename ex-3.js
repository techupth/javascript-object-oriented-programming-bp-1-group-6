//  Start coding here
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class Comment {
    constructor(id, content, createdBy) {
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = 0;
    }

    addLike() {
        this.like++;
    }
}

class Post {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comments = [];

        this.addComment = (id, content, createdBy) => {
            const comment = new Comment(id, content, createdBy);
            this.comments.push(comment);
        };
    }
}

class PostList {
    constructor() {
        this.posts = [];

        this.addPost = (id, title, content) => {
            const post = new Post(id, title, content);
            this.posts.push(post);
        };

        this.sharePost = (title) => {
            console.log(`You've shared post “${title}” to your friend.`);
        };
    }
}

class FacebookPage {
    constructor(name) {
        this.name = name;
    }
}

class FacebookGroup {
    constructor(name) {
        this.name = name;
    }
}

class Notification {
    constructor(id) {
        this.id = id;

        this.send = (commentCreatedBy, postTitle) => {
            console.log(`Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}"`);
        };
    }
}

const user = new User("1", "Pim", "Pim@example.com");

const postList = new PostList();
postList.addPost("1", "First Post", "Hello");
postList.addPost("2", "Second Post", "Good Bye");
postList.sharePost("First Post");

const post1 = postList.posts[0];
post1.addComment("1", "Hello", "A");
post1.addComment("2", "Good", "B");

const notification = new Notification("1");
notification.send("A", "Hello");

const page = new FacebookPage("Page 1");
const group = new FacebookGroup("Group 1");
