import { useState } from 'react';
import "./RegForm.css";

const RegForm = () => {
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        };
    
        const validate = () => {
            let tempErrors = {};
            if (!formData.firstName) tempErrors.firstName = 'Please enter your first name!';
            if (!formData.lastName) tempErrors.lastName = 'Please enter your last name!';
            if (!formData.email) {
                tempErrors.email = 'Please enter your email!';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                tempErrors.email = 'Email is invalid!';
            }
            if (!formData.contact) {
                tempErrors.contact = 'Please enter your contact number!';
            } else if (!/^\d{10}$/.test(formData.contact)) {
                tempErrors.contact = 'Invalid contact number!';
            }
            setErrors(tempErrors);
            return Object.keys(tempErrors).length === 0;
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (validate()) {
                setSuccessMessage('Registration successful!');
            }else {
                setSuccessMessage('');}
        };

        return (
            <div className="form-container">
                {successMessage && <div className="success-message">{successMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <p>{errors.firstName}</p>}
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    />
                    {errors.lastName && <p>{errors.lastName}</p>}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label>Contact</label>
                    <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    />
                    {errors.contact && <p>{errors.contact}</p>}
                </div>
                <button type="submit">Register</button>
            </form>
            </div>
            );
}

export default RegForm;
