import React, { useRef } from 'react';

const MultipleForms = () => {
  const form1Ref = useRef(null);
  const form2Ref = useRef(null);
  const form3Ref = useRef(null);

  const handleFormData = () => {
    const form1Data = new FormData(form1Ref.current);
    const form2Data = new FormData(form2Ref.current);
    const form3Data = new FormData(form3Ref.current);

    const formData = {
      form1: Object.fromEntries(form1Data.entries()),
      form2: Object.fromEntries(form2Data.entries()),
      form3: Object.fromEntries(form3Data.entries()),
    };

    // console.log("Form Data:", formData); -> output for all the collected data
  };

  return (
    <div>
      <form ref={form1Ref}>
        <input name="firstName" placeholder="First Name" />
        <input name="middleName" placeholder="Middle Name" />
        <input name="lastName" placeholder="Last Name" />
      </form>

      <form ref={form2Ref}>
        <input name="email" placeholder="Email" />
        <input name="phone" placeholder="Phone" />
        <input name="altPhone" placeholder="Alt Phone" />
      </form>

      <form ref={form3Ref}>
        <input name="stree" placeholder="Street" />
        <input name="city" placeholder="City" />
        <input name="state" placeholder="State" />
      </form>

      <button onClick={handleFormData}>Form Data</button>
    </div>
  );
};

export default MultipleForms;

