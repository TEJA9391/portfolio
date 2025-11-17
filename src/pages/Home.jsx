import React, { useState } from 'react'
import TejImg from '../assets/tej.jpg'

export default function Home() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validateField = (name, value) => {
        let error = ''

        if (name === 'name') {
            if (!value.trim()) {
                error = 'Name is required'
            } else if (value.trim().length < 2) {
                error = 'Name must be at least 2 characters'
            } else if (!/^[a-zA-Z\s]+$/.test(value)) {
                error = 'Name can only contain letters and spaces'
            }
        }

        if (name === 'email') {
            if (!value.trim()) {
                error = 'Email is required'
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                error = 'Please enter a valid email address'
            }
        }

        if (name === 'message') {
            if (!value.trim()) {
                error = 'Message is required'
            } else if (value.trim().length < 10) {
                error = 'Message must be at least 10 characters'
            } else if (value.trim().length > 1000) {
                error = 'Message cannot exceed 1000 characters'
            }
        }

        return error
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        if (touched[name]) {
            const error = validateField(name, value)
            setErrors(prev => ({ ...prev, [name]: error }))
        }
    }

    const handleBlur = (e) => {
        const { name, value } = e.target
        setTouched(prev => ({ ...prev, [name]: true }))
        const error = validateField(name, value)
        setErrors(prev => ({ ...prev, [name]: error }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validate all fields
        const newErrors = {}
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key])
            if (error) newErrors[key] = error
        })

        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true)
            setFormData({ name: '', email: '', message: '' })
            setTouched({})
            setTimeout(() => setSubmitted(false), 5000)
        } else {
            setErrors(newErrors)
            setTouched({ name: true, email: true, message: true })
        }
    }

    const isFieldValid = (name) => {
        return touched[name] && !errors[name]
    }

    const isFieldError = (name) => {
        return touched[name] && errors[name]
    }
    return (
        <>
            <section className="hero">
                <div className="hero-inner">
                    <div className="hero-left fade-in">
                        <div className="headline-wrap">
                            <h1 className="headline">I am Teja</h1>
                        </div>
                        <p style={{ margin: '12px 0 0', color: 'var(--muted)', fontWeight: 400 }}>B.Tech AIML Student & Developer</p>
                    </div>

                    <div className="photo-column fade-in delay">
                        <div className="photo-wrapper" aria-hidden="false">
                            <img className="photo" src={TejImg} alt="Teja" />
                        </div>
                    </div>

                    <div className="hero-right fade-in">
                        <p className="desc">B.Tech AI/ML student passionate about building intelligent solutions <br /> and full-stack web applications. Experienced in React, Python, and machine learning.</p>

                        <div style={{ marginTop: 12, display: 'flex', gap: 10, justifyContent: 'flex-start' }}>
                            <a className="btn btn-ghost" href="#" aria-label="View Resume">Resume</a>
                            <a className="btn btn-primary" href="#" aria-label="Contact">Contact</a>
                        </div>
                    </div>
                </div>
            </section>

            <main>
                <section id="about" className="fade-in">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                        <h3 style={{ margin: 0, fontWeight: 600 }}>About Me</h3>
                        <div style={{ color: 'var(--muted)', fontSize: 13 }}>Simple, minimal bio</div>
                    </div>

                    <div style={{ height: 14 }}></div>

                    <div className="about-grid">
                        <div className="about-left card">
                            <p style={{ margin: '0 0 8px 0', color: 'var(--muted)' }}>Role</p>
                            <h4 style={{ margin: '0 0 10px 0' }}>B.Tech AIML Student</h4>
                            <p style={{ margin: 0, color: 'var(--muted)' }}>I combine AI/ML expertise with full-stack development to create intelligent, user-centric applications. Passionate about solving real-world problems through technology.</p>
                        </div>

                        <div className="about-right card">
                            <p style={{ margin: '0 0 8px 0', color: 'var(--muted)' }}>Skills & Interests</p>
                            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 8 }}>
                                <span className="tag">Python</span>
                                <span className="tag">React</span>
                                <span className="tag">JavaScript</span>
                                <span className="tag">Machine Learning</span>
                                <span className="tag">Flask</span>
                                <span className="tag">SQL</span>
                                <span className="tag">TensorFlow</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="fade-in delay">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                        <h3 style={{ margin: 0, fontWeight: 600 }}>Projects</h3>
                        <div style={{ color: 'var(--muted)', fontSize: 13 }}>Selected work</div>
                    </div>

                    <div className="projects-grid">
                        <div className="proj">
                            <h4>Student Aware Study Assistance</h4>
                            <p style={{ margin: '6px 0 0', color: 'var(--muted)' }}>AI-powered study platform that tracks student engagement and provides personalized learning recommendations using computer vision and ML algorithms.</p>
                            <div className="tags"><span className="tag">Python</span><span className="tag">TensorFlow</span><span className="tag">OpenCV</span><span className="tag">React</span></div>
                            <div className="buttons">
                                <a className="btn btn-ghost" href="#" target="_blank">GitHub</a>
                                <a className="btn btn-primary" href="#" target="_blank">Learn more</a>
                            </div>
                        </div>

                        <div className="proj">
                            <h4>FixHub</h4>
                            <p style={{ margin: '6px 0 0', color: 'var(--muted)' }}>Community-driven platform connecting users with local service providers and repair professionals. Full-stack web application with real-time messaging.</p>
                            <div className="tags"><span className="tag">React</span><span className="tag">Node.js</span><span className="tag">MongoDB</span><span className="tag">Firebase</span></div>
                            <div className="buttons">
                                <a className="btn btn-ghost" href="#" target="_blank">GitHub</a>
                                <a className="btn btn-primary" href="#" target="_blank">Live demo</a>
                            </div>
                        </div>

                        <div className="proj">
                            <h4>Sentiment Analysis Web App</h4>
                            <p style={{ margin: '6px 0 0', color: 'var(--muted)' }}>Web-based sentiment analysis tool using NLP to classify text emotions. Built with Flask backend and React frontend with real-time predictions.</p>
                            <div className="tags"><span className="tag">Python</span><span className="tag">NLP</span><span className="tag">Flask</span><span className="tag">React</span></div>
                            <div className="buttons">
                                <a className="btn btn-ghost" href="#" target="_blank">GitHub</a>
                                <a className="btn btn-primary" href="#" target="_blank">Try it</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="fade-in">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                        <h3 style={{ margin: 0, fontWeight: 600 }}>Contact</h3>
                        <div style={{ color: 'var(--muted)', fontSize: 13 }}>Get in touch</div>
                    </div>

                    <div style={{ height: 14 }}></div>

                    <div className="card">
                        {submitted && (
                            <div style={{
                                padding: '12px 16px',
                                marginBottom: '16px',
                                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                                border: '1px solid rgba(34, 197, 94, 0.3)',
                                borderRadius: '8px',
                                color: '#22c55e',
                                fontSize: '14px',
                                fontWeight: 500
                            }}>
                                ✓ Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        <form className="contact-grid" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label htmlFor="name">
                                    Name
                                    {isFieldValid('name') && <span style={{ color: '#22c55e', marginLeft: '4px' }}>✓</span>}
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`form-input ${isFieldError('name') ? 'error' : ''} ${isFieldValid('name') ? 'valid' : ''}`}
                                />
                                {isFieldError('name') && (
                                    <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        ✗ {errors.name}
                                    </span>
                                )}
                                {isFieldValid('name') && (
                                    <span style={{ color: '#22c55e', fontSize: '12px', marginTop: '4px' }}>Looks good!</span>
                                )}
                            </div>

                            <div className="form-control">
                                <label htmlFor="email">
                                    Email
                                    {isFieldValid('email') && <span style={{ color: '#22c55e', marginLeft: '4px' }}>✓</span>}
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`form-input ${isFieldError('email') ? 'error' : ''} ${isFieldValid('email') ? 'valid' : ''}`}
                                />
                                {isFieldError('email') && (
                                    <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        ✗ {errors.email}
                                    </span>
                                )}
                                {isFieldValid('email') && (
                                    <span style={{ color: '#22c55e', fontSize: '12px', marginTop: '4px' }}>Valid email!</span>
                                )}
                            </div>

                            <div className="form-control" style={{ gridColumn: '1 / -1' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <label htmlFor="message">
                                        Message
                                        {isFieldValid('message') && <span style={{ color: '#22c55e', marginLeft: '4px' }}>✓</span>}
                                    </label>
                                    <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                                        {formData.message.length}/1000
                                    </span>
                                </div>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Hello — how can I help?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`form-input ${isFieldError('message') ? 'error' : ''} ${isFieldValid('message') ? 'valid' : ''}`}
                                ></textarea>
                                {isFieldError('message') && (
                                    <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        ✗ {errors.message}
                                    </span>
                                )}
                                {isFieldValid('message') && (
                                    <span style={{ color: '#22c55e', fontSize: '12px', marginTop: '4px' }}>Great message!</span>
                                )}
                            </div>

                            <div className="submit-wrap" style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-start' }}>
                                <button
                                    className="btn-submit"
                                    type="submit"
                                    disabled={Object.keys(formData).some(key => !formData[key].trim())}
                                    style={{
                                        opacity: Object.keys(formData).some(key => !formData[key].trim()) ? 0.6 : 1,
                                        cursor: Object.keys(formData).some(key => !formData[key].trim()) ? 'not-allowed' : 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}
