import React, { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState({ fullName: '', email: '', phone: '', company: '', message: '' });
    const [status, setStatus] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    function validate() {
        if (!form.fullName.trim()) return 'Full name is required';
        if (!form.email.trim()) return 'E-mail is required';
        const emailRe = /^\S+@\S+\.\S+$/;
        if (!emailRe.test(form.email)) return 'Please enter a valid e-mail';
        if (!form.message.trim()) return 'Please tell us how we can help';
        return null;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus(null);
        const err = validate();
        if (err) {
            setStatus({ type: 'error', message: err });
            return;
        }

        // POST JSON to Netlify serverless function
        const endpoint = '/.netlify/functions/send-email';
        const payload = {
            fullName: form.fullName,
            email: form.email,
            phone: form.phone,
            company: form.company,
            message: form.message
        };

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(payload)
            });
            const json = await res.json();
            if (json.ok) {
                setStatus({ type: 'success', message: 'Message sent — thank you!' });
                setForm({ fullName: '', email: '', phone: '', company: '', message: '' });
            } else {
                setStatus({ type: 'error', message: json.message || 'Failed to send message' });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'Network error while sending message' });
        }
    }

    return (
        <div className="row">
            <div className="col-lg-8 offset-lg-2">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0">Contact us</h5>
                    </div>

                    <div className="card-body">
                        <p className="mb-3">Sales and general inquires</p>
                        {/* <p>
                            <strong>info@itransition.com</strong>
                        </p> */}

                        {/* <p className="mt-4"><strong>Want to join Itransition?</strong></p>
                        <p>
                            <a href="#" className="btn bg-indigo-300">Explore careers</a>
                        </p> */}
                    </div>

                    <div className="card-body border-top">
                        {status && (
                            <div className={status.type === 'error' ? 'alert alert-danger' : 'alert alert-success'}>{status.message}</div>
                        )}

                        <form onSubmit={handleSubmit} noValidate>
                            <div className="row mb-3">
                                <label className="col-lg-4 col-form-label">Full name:</label>
                                <div className="col-lg-8">
                                    <input
                                        name="fullName"
                                        value={form.fullName}
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="Full name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-lg-4 col-form-label">E-mail:</label>
                                <div className="col-lg-8">
                                    <input
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        type="email"
                                        className="form-control"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-lg-4 col-form-label">Phone number:</label>
                                <div className="col-lg-8">
                                    <input
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        className="form-control"
                                        placeholder="Optional"
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-lg-4 col-form-label">Company:</label>
                                <div className="col-lg-8">
                                    <input
                                        name="company"
                                        value={form.company}
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="Company"
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-lg-4 col-form-label">How can we help you?</label>
                                <div className="col-lg-8">
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        className="form-control"
                                        rows={4}
                                        placeholder="Enter your message here"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <p className="text-muted small">
                                Please be informed that when you click the Send button Zeeshan Solution Group will process your personal data in accordance with our Privacy notice for the purpose of providing you with appropriate information.
                            </p>

                            <div className="text-end">
                                <button type="submit" className="btn btn-primary">Submit form <i className="ph-paper-plane-tilt ms-2"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}