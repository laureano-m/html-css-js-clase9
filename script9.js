// Función para validar el nombre completo
function validateFullName() {
    const fullNameInput = document.getElementById('full-name');
    const errorDiv = fullNameInput.nextElementSibling;
    const fullName = fullNameInput.value.trim();

    if (fullName.length < 6 || !fullName.includes(' ')) {
        errorDiv.textContent = 'El nombre completo debe tener más de 6 letras y al menos un espacio.';
        return false;
    }

    errorDiv.textContent = '';
    return true;
}

// Función para validar el email
function validateEmail() {
    const emailInput = document.getElementById('email');
    const errorDiv = emailInput.nextElementSibling;
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        errorDiv.textContent = 'Ingrese un email válido.';
        return false;
    }

    errorDiv.textContent = '';
    return true;
}

// Función para validar la contraseña
function validatePassword() {
    const passwordInput = document.getElementById('password');
    const errorDiv = passwordInput.nextElementSibling;
    const password = passwordInput.value.trim();

    if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
        errorDiv.textContent = 'La contraseña debe tener al menos 8 caracteres, formados por letras y números.';
        return false;
    }

    errorDiv.textContent = '';
    return true;
}

// Función para validar la edad
function validateAge() {
    const ageInput = document.getElementById('age');
    const errorDiv = ageInput.nextElementSibling;
    const age = parseInt(ageInput.value);

    if (isNaN(age) || age < 18) {
        errorDiv.textContent = 'La edad debe ser un número entero mayor o igual a 18.';
        return false;
    }

    errorDiv.textContent = '';
    return true;
}

// Función para validar el teléfono
function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const errorDiv = phoneInput.nextElementSibling;
    const phone = phoneInput.value.trim();

    if (!/^\d{7,}$/.test(phone)) {
        errorDiv.textContent = 'El teléfono debe tener al menos 7 dígitos sin espacios, guiones ni paréntesis.';
        return false;
    }

    errorDiv.textContent = '';
    return true;
}

// Función para validar la dirección
function validateAddress() {
    const addressInput = document.getElementById('address');
    const errorDiv = addressInput.nextElementSibling;
    const address = addressInput.value.trim();

    if (address.length < 5 || !/^[a-zA-Z0-9\s]+$/.test(address)) {
        errorDiv.textContent = 'La dirección debe tener al menos 5 caracteres, con letras, números y un espacio en el medio.';
        return false;
    }

    errorDiv.textContent = '';
    return true;
}

// Función para validar la ciudad
function validateCity() {
    const cityInput = document.getElementById('city');
    const errorDiv = cityInput.nextElementSibling;
    const city = cityInput.value.trim();

    if (city.length < 3) {
        errorDiv.textContent = 'La ciudad debe tener al menos 3 caracteres.';
        return false;
    }

    errorDiv.textContent = '';
    return true;
}

// Función para validar el código postal
function validatePostalCode() {
    const postalCodeInput = document.getElementById('postcode');
    const errorDiv = postalCodeInput.nextElementSibling;
    const postalCode = postalCodeInput.value.trim();

    if (postalCode.length < 3) {
        errorDiv.textContent = 'El código postal debe tener al menos 3 caracteres.';
        return false;
    }

    errorDiv.textContent = '';
    return true;
}

// Función para validar el DNI
function validateDNI() {
    const dniInput = document.getElementById('dni');
    const errorDiv = dniInput.nextElementSibling;
    const dni = dniInput.value.trim();
    const dniRegex = /^\d{7,8}$/;

    if (!dniRegex.test(dni)) {
        errorDiv.textContent = 'El DNI debe tener 7 u 8 dígitos.';
        return false;
    }

    errorDiv.textContent = '';
    return true;
}

// Función para validar todos los campos del formulario
function validateForm(event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente

    // Validar cada campo del formulario
    const isValidFullName = validateFullName();
    const isValidEmail = validateEmail();
    const isValidPassword = validatePassword();
    const isValidAge = validateAge();
    const isValidPhone = validatePhone();
    const isValidAddress = validateAddress();
    const isValidCity = validateCity();
    const isValidPostalCode = validatePostalCode();
    const isValidDNI = validateDNI();

    // Mostrar mensaje emergente con los datos del formulario si todos los campos son válidos
    if (
        isValidFullName &&
        isValidEmail &&
        isValidPassword &&
        isValidAge &&
        isValidPhone &&
        isValidAddress &&
        isValidCity &&
        isValidPostalCode &&
        isValidDNI
    ) {
        const formData = new FormData(event.target);

        let message = '';
        for (const [key, value] of formData.entries()) {
            message += `${key}: ${value}\n`;
        }

        alert("Registro exitoso"); // Mostrar alerta con los datos del formulario
    } else {
        alert("Por favor, completa todos los campos correctamente.");
    }
}


// Agregar eventos de validación y envío del formulario
document.getElementById('full-name').addEventListener('blur', validateFullName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('password').addEventListener('blur', validatePassword);
document.getElementById('age').addEventListener('blur', validateAge);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('address').addEventListener('blur', validateAddress);
document.getElementById('city').addEventListener('blur', validateCity);
document.getElementById('postcode').addEventListener('blur', validatePostalCode);
document.getElementById('dni').addEventListener('blur', validateDNI);
document.getElementById('form').addEventListener('submit', validateForm);

// Ocultar mensaje de error en el evento focus de cada campo
document.getElementById('full-name').addEventListener('focus', function() {
    document.getElementById('error-full-name').textContent = '';
});
document.getElementById('email').addEventListener('focus', function() {
    document.getElementById('error-email').textContent = '';
});
document.getElementById('password').addEventListener('focus', function() {
    document.getElementById('error-password').textContent = '';
});
document.getElementById('repeat-password').addEventListener('focus', function() {
    document.getElementById('error-repeat-password').textContent = '';
});
document.getElementById('age').addEventListener('focus', function() {
    document.getElementById('error-age').textContent = '';
});
document.getElementById('phone').addEventListener('focus', function() {
    document.getElementById('error-phone').textContent = '';
});
document.getElementById('address').addEventListener('focus', function() {
    document.getElementById('error-address').textContent = '';
});
document.getElementById('city').addEventListener('focus', function() {
    document.getElementById('error-city').textContent = '';
});
document.getElementById('postcode').addEventListener('focus', function() {
    document.getElementById('error-postcode').textContent = '';
});
document.getElementById('dni').addEventListener('focus', function() {
    document.getElementById('error-dni').textContent = '';
});
