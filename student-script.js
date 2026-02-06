// Get form element
const studentForm = document.getElementById('studentForm');

// Form submission handler
studentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(studentForm);
    const studentData = {};

    // Convert form data to object
    for (let [key, value] of formData.entries()) {
        if (key === 'hobbies') {
            if (!studentData.hobbies) {
                studentData.hobbies = [];
            }
            studentData.hobbies.push(value);
        } else {
            studentData[key] = value;
        }
    }

    // Display submitted data in console
    console.log('Student Data Submitted:', studentData);

    // Create formatted message
    let hobbiesText = studentData.hobbies && studentData.hobbies.length > 0
        ? studentData.hobbies.join(', ')
        : 'None selected';

    // Show success message
    alert('✅ Form submitted successfully!\n\n' +
        '📋 Student Details:\n' +
        '━━━━━━━━━━━━━━━━━━━━\n' +
        '👤 Name: ' + studentData.name + '\n' +
        '🎓 Roll Number: ' + studentData.rollNumber + '\n' +
        '📧 Email: ' + studentData.email + '\n' +
        '👫 Gender: ' + studentData.gender + '\n' +
        '📚 Course: ' + studentData.course + '\n' +
        '🎯 Hobbies: ' + hobbiesText + '\n' +
        '🏠 Address: ' + studentData.address
    );

    // Optional: Clear form after submission
    // studentForm.reset();
});

// Add animation to form inputs on focus
const inputs = document.querySelectorAll('input, select, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function () {
        this.parentElement.classList.remove('focused');
    });
});

// Add visual feedback for radio buttons
const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(radio => {
    radio.addEventListener('change', function () {
        // Remove active class from all labels in the same group
        const group = this.closest('.radio-group');
        group.querySelectorAll('.radio-label').forEach(label => {
            label.style.backgroundColor = '';
            label.style.borderColor = '';
        });

        // Add active class to selected label
        if (this.checked) {
            this.closest('.radio-label').style.backgroundColor = 'rgba(102, 126, 234, 0.15)';
            this.closest('.radio-label').style.borderColor = 'rgba(102, 126, 234, 0.5)';
        }
    });
});

// Add visual feedback for checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            this.closest('.checkbox-label').style.backgroundColor = 'rgba(102, 126, 234, 0.15)';
            this.closest('.checkbox-label').style.borderColor = 'rgba(102, 126, 234, 0.5)';
        } else {
            this.closest('.checkbox-label').style.backgroundColor = '';
            this.closest('.checkbox-label').style.borderColor = '';
        }
    });
});
