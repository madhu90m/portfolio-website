/* script.js */

// JavaScript for Interactive Features
document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            alert(`You clicked on ${skill.textContent}`);
        });
    });
});