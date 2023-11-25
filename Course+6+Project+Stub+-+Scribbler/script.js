document.addEventListener('DOMContentLoaded', () => {
    const editBtn = document.getElementById('edit-btn');
    const postTitle = document.querySelector('.post-title');
    const postText = document.querySelector('.post-text');
    const likeBtn = document.getElementById('like-btn');
    const likeCount = document.querySelector('.like-count');
    const commentForm = document.querySelector('.comment-form');
    const commentInput = document.getElementById('comment-input');
    const comments = document.querySelector('.comments');

    let editMode = false;

    editBtn.addEventListener('click', () => {
        editMode = !editMode;
        if (editMode) {
            editBtn.textContent = 'Save';
            postTitle.setAttribute('contenteditable', 'true');
            postText.setAttribute('contenteditable', 'true');
        } else {
            editBtn.textContent = 'Edit';
            postTitle.setAttribute('contenteditable', 'false');
            postText.setAttribute('contenteditable', 'false');
        }
    });

    likeBtn.addEventListener('click', () => {
        if (likeCount.textContent === 'Be the first one to like this!') {
            likeCount.textContent = '1 person likes this!';
        } else {
            let currentCount = parseInt(likeCount.textContent.split(' ')[0]);
            likeCount.textContent = (currentCount + 1) + ' people like this!';
        }
        likeBtn.textContent = 'Liked!';
        likeBtn.disabled = true;
    });

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const comment = document.createElement('p');
        comment.textContent = commentInput.value;
        comments.prepend(comment);
        commentInput.value = '';
    });
});