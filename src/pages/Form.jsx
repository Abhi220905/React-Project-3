import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  const [users, setUsers] = useState({ course: [] });
  const [show, setShow] = useState(false);

  // Handle input
  function Input(e) {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // handle multiple checkbox
      setUsers((prev) => {
        const updatedCourses = checked
          ? [...prev.course, value] // add
          : prev.course.filter((item) => item !== value); // remove
        return { ...prev, course: updatedCourses };
      });
    } else {
      setUsers({ ...users, [name]: value });
    }

    setShow(false);
  }

  // Handle submit
  function showData(e) {
    e.preventDefault();
    setShow(true);
    e.target.reset();
  }

  return (
    <>
      <div className="container bg-light shadow mt-5 p-5  rounded-4">
        <h1 className="text-center mb-4 text-primary">🎓 Admission Form</h1>

        <form onSubmit={showData}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="form-label fw-bold">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Enter your name"
              onChange={Input}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="form-label fw-bold">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="example@gmail.com"
              onChange={Input}
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label htmlFor="phone" className="form-label fw-bold">
              Mobile Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="form-control"
              placeholder="Enter 10-digit number"
              onChange={Input}
              required
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="form-label fw-bold">Gender</label>
            <div className="d-flex gap-4">
              {["Male", "Female", "Other"].map((g) => (
                <div className="form-check" key={g}>
                  <input
                    type="radio"
                    className="form-check-input"
                    name="gender"
                    value={g}
                    id={g.toLowerCase()}
                    onChange={Input}
                  />
                  <label
                    htmlFor={g.toLowerCase()}
                    className="form-check-label text-capitalize"
                  >
                    {g}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Course (Multiple Checkbox) */}
          <div className="mb-4">
            <label className="form-label fw-bold">Select Courses</label>
            <div className="row">
              {["B.com", "BCA", "MCA", "BSC"].map((c) => (
                <div className="col-md-3 col-sm-6" key={c}>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="course"
                      value={c}
                      id={c.toLowerCase()}
                      onChange={Input}
                    />
                    <label
                      htmlFor={c.toLowerCase()}
                      className="form-check-label text-capitalize"
                    >
                      {c}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="form-label fw-bold">
              Address
            </label>
            <textarea
              name="address"
              id="address"
              className="form-control"
              placeholder="Enter your complete address"
              rows="3"
              onChange={Input}
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-5 fw-bold">
              Submit
            </button>
          </div>
        </form>
      </div>

      {show && (
        <div className="container mt-5">
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div
              className="card-header bg-gradient text-white text-center py-3"
              style={{ background: "linear-gradient(90deg, #007bff, #00bcd4)" }}
            >
              <h2 className="text-center mb-0 text-primary">
                {" "}
                Submission Successful
              </h2>
            </div>

            <div className="card-body bg-light p-4">
              <h5 className="text-center text-secondary mb-4">
                🎓 Here are your submitted details
              </h5>

              <div className="row text-start">
                <div className="col-md-6 mb-3">
                  <strong>Name:</strong>
                  <div className="text-capitalize">{users.name}</div>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Email:</strong>
                  <div>{users.email}</div>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Phone:</strong>
                  <div>{users.phone}</div>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Gender:</strong>
                  <div className="text-capitalize">{users.gender}</div>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Courses:</strong>
                  <div className="text-capitalize">
                    {users.course.length > 0 ? users.course.join(", ") : "None"}
                  </div>
                </div>

                <div className="col-md-12 mb-3">
                  <strong>Address:</strong>
                  <div className="text-capitalize">{users.address}</div>
                </div>
              </div>

              <div className="text-center mt-4">
                <button
                  className="btn btn-outline-primary px-4 fw-bold"
                  onClick={() => setShow(false)}
                >
                  Back to Form
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
