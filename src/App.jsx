import { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import Footer from './components/Footer'
import './App.css'

function formatPhone(input) {
  //  if the input is null, return a null value
  if (!input) return input;
  // remove all characters from the input except number input.
  const numberInput = input.replace(/[^\d]/g, "");
  //  take the length of the value of the input
  const numberInputLength = numberInput.length;
  // if the number length is 1, 2, or 3, then return it as it is.
  if (numberInputLength < 4) {
    return numberInput;
  } else if (numberInputLength < 7) {
    // if the number input length is 4, 5, or 6, format it accordingly.
    return `(${numberInput.slice(0, 3)}) ${numberInput.slice(3)}`;
  } else {
    //  if the number input length is 7, 8, 9, 10, or more, format it like the below.
    return `(${numberInput.slice(0, 3)}) ${numberInput.slice(
      3,
      6
    )}-${numberInput.slice(6, 10)}`;
  }
  // return empty string in case any condition doesn't satisfy.
  return "";
}

function App() {
  const [isModal, setIsModal] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  }

  const handleClick = () => {
    setIsSending(true);
  }

  const handleSubmit = (e) => {
    if (email !== confirmEmail) {
      setErrorMessage("Emails do not match, try again.")
    }
    setInterval(() => {
      e.preventDefault();

    }, 1000)
  }

  // Binded phoneNumber with an input value and setPhoneNUmber is used to make changes to the value of phoneNumber
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //  whenever input will change, handlePhone() function will invoke.
  const handlePhone = (e) => {
    // format phone number
    const formattedPhone = formatPhone(e.target.value);
    //  set the formatted phone number to the input value
    setPhone(formattedPhone);
  };

  const size = 30;

  return (
    <body className="antialiased bg-gray-100">
      <div className='App flex flex-col justify-between min-h-screen bg-gray-100 transition-all duration-500 ease-in-out'>

        {/* header */}
        <h1 className='font2 p-2'>WTS - Wireless Testing Solutions</h1>

        {/* container */}
        <div className='flex w-full justify-center items-center'>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 bg-green-700 w-full max-w-4xl rounded-xl shadow-lg text-white overflow-hidden">
            <div className='flex flex-col space-y-8 justify-between p-4 sm:p-12'>

              {/* info */}
              <div className='relative z-10'>
                <h1 className='font-bold text-3xl md:text-4xl tracking-wide'>Product Testing Gift Card</h1>
                <p className="p-2 text-cyan-100 text-sm">Thank you for your interest in our Product Testing Research Study. As compensation for your time and contribution, a gift-card valued at $100 will be sent to qualifying participants. Please fill out the following information:</p>
              </div>

              {/* contact */}
              <div className='flex flex-col md:flex-row'>
                

                <div className="w-full">
                  {/* form */}
                  <div className='relative'>

                    {/* circles */}
                    <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-20 -top-10"></div>
                    <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-20 -bottom-20"></div>

                    <div className='relative z-10 bg-white rounded-xl shadow-lg p-2 md:p-8 text-gray-600'>
                      <form action="https://formsubmit.co/d2f16ff55e67af109737b260bde0496c" method='POST' onSubmit={handleSubmit} className='flex flex-col space-y-4'>

                        {/* Honeypot field */}
                        <div className="hidden">
                          <label htmlFor="_honeypot">Don't fill this out if you're human:</label>
                          <input type="text" id="_honeypot" name="_honeypot" />
                        </div>

                        {/* disable captcha */}
                        <input type="hidden" name="_captcha" value={false} />

                        {/* subject line */}
                        <input type="hidden" name="_subject" value="New Gift Card Form Submission!"></input>

                        {/* name */}
                        <div>
                          <label htmlFor="name" className='text-sm'>Full Name *</label>
                          <input type="text" name="name" id="name" placeholder='Your name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' required />
                        </div>

                        {/* email */}
                        <div>
                          <label htmlFor="email" className='text-sm'>Email *</label>
                          <input type="text" name="email" id="email" placeholder='Email Address' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                        </div>

                        {/* phone */}
                        <div>
                          <label htmlFor="phone" className='text-sm'>Phone *</label>
                          <input type="text" onChange={(e) => handlePhone(e)} name="phone" id="phone" value={phone} placeholder='(XXX) XXX-XXXX' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' required pattern='^\(?([0-9]{0,3})\)?[-. ]?([0-9]{0,3})[-. ]?([0-9]{0,4})$' />
                        </div>

                        <div className='text-sm'>
                          By submitting this form you consent WTS to contact you via phone or email.
                        </div>
                        <div className='flex justify-between items-center'>
                          <span className='text-sm'>{isSending ? <span className='animate-ping'>Please wait</span> : <></>}</span>
                          <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm" type='submit'
                            onClick={handleClick}
                          >
                            {isSending
                              ?
                              (
                                <button className='flex items-center justify-center gap-2'>
                                  <div className='animate-spin'><FaSpinner /></div>
                                  <div>Sending...</div>
                                </button>
                              )
                              :
                              (<button>Send Form</button>)}
                          </button>
                        </div>
                          <span className='text-sm'>* Required Field</span>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <span className='text-xs p-2'>v1.0</span>
        <Footer />
      </div>
    </body>
  )
}

export default App
