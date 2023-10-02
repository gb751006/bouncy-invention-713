import React, { useState } from "react";
import transferStyle from "../styles/Transfers.module.css";

const Transfers = () => {
  const [showOptions, setShowOptions] = useState([false, false, false, false, false]);

  const toggleOptions = (index) => {
    const updatedOptions = [...showOptions];
    updatedOptions[index] = !updatedOptions[index];
    setShowOptions(updatedOptions);
  };

  return (
    <div className={transferStyle.container}>
      <h1 className={transferStyle.title1}>Transfers</h1>
      <div className={transferStyle["mid"]}>
        <p className={transferStyle["s1"]}>Start receiving funds</p>
        <p>Whose account will the funds be transferred to?</p>
        <p className={transferStyle["s2"]}>
          The account holder must be 18 years or older with a valid ID.
        </p>
      </div>
      <div className={transferStyle["middle"]}>
        <div className={transferStyle["box"]}>
          <p className={transferStyle["bd"]}>Your bank account</p>
          <p className={transferStyle["gp"]}>
            Verify your email, provide basic details and link a bank account
          </p>
        </div>
        <div className={transferStyle["box"]}>
          <p className={transferStyle["bd"]}>A business bank account</p>
          <p className={transferStyle["gp"]}>
            Deposit into an account owned by a business or organisation
          </p>
        </div>
        <div className={transferStyle["box"]}>
          <p className={transferStyle["bd"]}>Someone else’s bank account</p>
          <p className={transferStyle["gp"]}>
            Send an email invitation to a beneficiary to link their own bank
            account
          </p>
        </div>
      </div>
      <div className={transferStyle["bottom"]}>
        <p>How to set up bank transfers</p>
        <div className={transferStyle["box2"]}>
          <ul>
            <div className={transferStyle["dflex"]}>
              <li className={transferStyle["li1"]}>1 Decide whose bank account the money will go into</li>
              <button onClick={() => toggleOptions(0)} className={transferStyle["expand-button"]}>
                {showOptions[0] ? "-" : "+"}
              </button>
            </div>
            {showOptions[0] && (
              <ul>
                <li>
                  Select "Your bank account" to send money to your personal bank
                  account.
                </li>
                <li>
                  Select "A business bank account" to send money to a business
                  or organisation bank account.
                </li>
                <li>
                  Select "Someone else’s bank account" to invite another person
                  to set up transfers directly to their own bank account. We
                  call this person a beneficiary. Once you've added a
                  beneficiary, your part of the transfer process is complete.
                </li>
              </ul>
            )}
          </ul>
        </div>
        <hr />
        <div className={transferStyle["box2"]}>
          <ul>
            <div className={transferStyle["dflex"]}>
              <li className={transferStyle["li1"]}>2 Add personal and bank details</li>
              <button onClick={() => toggleOptions(1)} className={transferStyle["expand-button"]}>
                {showOptions[1] ? "-" : "+"}
              </button>
            </div>
            {showOptions[1] && (
              <ul>
                <li>
                  The information you enter will be used by our payment partner
                  to verify who you are. For this reason, it needs to match your
                  government-issued ID exactly. This name won’t be displayed
                  publicly on the fundraiser. Enter your physical address (not a
                  PO box) Enter your full name; don’t use an abbreviated version
                  or nickname You can either use instant verification to connect
                  your bank account or enter the information manually. If you
                  enter it manually, you can usually find the necessary
                  information in your online banking portal or on a cheque.
                </li>
                <li>Include any 0s at the beginning of your account number.</li>
                <li>
                  Use the routing number for ACH, EFT, or direct deposit. Do not
                  use the routing number for wire transfers.
                </li>
                <li>
                  For European bank accounts, the IBAN must include capital
                  letters without spaces.
                </li>
                <li>
                  The name you entered in personal information must match the
                  bank account holder's name. Do not enter someone else’s bank
                  details.
                </li>
                <li>
                  You can transfer your funds to a prepaid debit card as long as
                  it has both a sort code and an account number. If you aren’t
                  sure about this information, please contact the card issuer to
                  check.
                </li>
                <li>
                  If you're using a Chase bank account, you will see a virtual
                  account number while connecting your bank; this won't match
                  your actual account number. When you select "Back to
                  GoFundMe", you'll see your transfers overview, which will show
                  your own account number.
                </li>
              </ul>
            )}
          </ul>
        </div>
        <hr />
        <div className={transferStyle["box2"]}>
          <ul>
            <div className={transferStyle["dflex"]}>
              <li className={transferStyle["li1"]}>3 GoFundMe verifies your information</li>
              <button onClick={() => toggleOptions(2)} className={transferStyle["expand-button"]}>
                {showOptions[2] ? "-" : "+"}
              </button>
            </div>
            {showOptions[2] && (
              <ul>
                <li>
                  We want to ensure that the funds are sent safely to the
                  correct recipient. It may take a few working days to verify
                  your details and we will contact you if we need further
                  information.
                </li>
              </ul>
            )}
          </ul>
        </div>

        <div className={transferStyle["box2"]}>
          <ul>
            <div className={transferStyle["dflex"]}>
              <li className={transferStyle["li1"]}>4 Other supporting documents may be required</li>
              <button onClick={() => toggleOptions(3)} className={transferStyle["expand-button"]}>
                {showOptions[3] ? "-" : "+"}
              </button>
            </div>
            {showOptions[3] && (
              <ul>
                <li>
                  In some cases, we may ask for a copy of your bank statement,
                  government-issued identification or more information about
                  your relationship to the fundraiser. You’ll hear from us by
                  email and a message in your account.
                </li>
                <li>
                  If you need to upload a form of ID or bank statement, you’ll
                  see a message on your transfers overview.
                </li>
                <li>
                  Once your documents are verified, funds will be sent
                  automatically. If they’re unable to be verified, we will email
                  you.
                </li>
                <li>
                  You may also provide this information by replying to the email
                  sent from our team with the subject line: "Important Message
                  from GoFundMe - Response Required". If you can’t find this
                  email, please contact our team using this form.
                </li>
              </ul>
            )}
          </ul>
        </div>
        <hr />
        <div className={transferStyle["box2"]}>
          <ul>
            <div className={transferStyle["dflex"]}>
              <li className={transferStyle["li1"]}>5 Receive money in your bank account</li>
              <button onClick={() => toggleOptions(4)} className={transferStyle["expand-button"]}>
                {showOptions[4] ? "-" : "+"}
              </button>
            </div>
            {showOptions[4] && (
              <ul>
                <li>
                  Once your bank information has been verified, funds are sent automatically.
                </li>
                <li>
                  Individual donations take 1-14 working days to be processed and included in a transfer.
                </li>
                <li>
                  Transfers are made on a daily basis, unless you change to weekly or monthly.
                </li>
                <li>Each transfer includes all currently available donations.</li>
                <li>It takes 2 – 5 working days for transfers to reach the bank account after leaving GoFundMe.</li>
                <li>Your GoFundMe transfer overview will show the date that funds are expected to arrive in your bank account, not the date they’re sent from GoFundMe.</li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Transfers;
