# React Hook Form

<img src="https://miro.medium.com/v2/resize:fit:1400/1*-2-7KUffKUaJKjDezM5RGQ.png"/>

```bash
npm i react-hook-form
```

# To run this code

``bash
git clone https://github.com/david-rai/react-hook-form.git/
npm install
npm run dev
```

## Visit
http://localhost:5173/

## Simple example
```bash
        {/* Password input field */}
        <input
          {...register("password",{
            required:true,
            min:{value:5,message:"minimum 5 length is required"}
          })}
          className='input' type="password"
          name="password" id="password" placeholder='password' />
        {
          errors.password && <p className='text-red-500'>{errors.password.message}</p>
        }
```

✅ React Hook Form (RHF) Topics to Learn
🔹 1. Basic Setup
useForm hook

register inputs

handleSubmit for form handling

formState.errors to show validation messages

🔹 2. Built-in Validation Rules
required

min, max (for numbers)

minLength, maxLength (for strings)

pattern (regex)

validate (custom functions)

🔹 3. Controlled Components
Using RHF with components like:

select

checkbox

radio

textarea

🔹 4. Advanced Validation
Custom validate functions

Cross-field validation (getValues, watch)

Conditional validation (based on other input)

Async validation (e.g. check if email exists)

🔹 5. Error Handling
Showing inline error messages

Using formState.isValid, isDirty, isSubmitting

Disable submit button on validation error

🔹 6. Form Utilities
reset() form after submission

setValue() to manually change field values

watch() to monitor field changes

trigger() to manually trigger validation

🔹 7. Form Submission
Collecting validated data and sending to backend via fetch or axios

Showing loading states (e.g. isSubmitting)

Displaying backend errors

🔹 8. File Uploads
Handling <input type="file" /> with RHF

Using FormData to send files to Node.js server

🔹 9. FormProvider & useFormContext
Managing large forms with multiple components

Sharing useForm() across deeply nested components

🔹 10. Schema-based Validation (Optional but Recommended)
Integrating with:

Yup

Zod

Joi

Works with resolver from @hookform/resolvers