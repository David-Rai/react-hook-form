# React Hook Form

<img src="https://miro.medium.com/v2/resize:fit:1400/1*-2-7KUffKUaJKjDezM5RGQ.png"/>

```bash
npm i react-hook-form
```

# To run this code

```bash
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