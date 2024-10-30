function validateRequest(body) {
  const fields = {
    name: "Please, fill this field",
    email: "Please, fill email correctly",
    phone: "Please, fill this field",
    message: "Please, fill this field",
  };

  const testName = validateField(body.name, "name", fields);
  const testEmail = validateField(body.email, "email", fields);
  const testPhone = validateField(body.phone, "phone", fields);
  const testMessage = validateField(body.message, "message", fields);

  if (testName && testEmail && testPhone && testMessage) {
    const responseMessage = {
      status: "success",
      msg: "Ваша заявка успешно отправлена",
    };

    return responseMessage;
  } else {
    const responseMessage = JSON.stringify({
      status: "error",
      fields,
    });
    return responseMessage;
  }
}

function validateField(field, fieldName, fieldsObj) {
  const valid =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const isValidEmail = valid.test(field);

  if (fieldName === "email" ? isValidEmail : field.trim().length > 1) {
    delete fieldsObj[fieldName];
    return true;
  } else {
    return false;
  }
}

module.exports = {
  validateRequest,
};
