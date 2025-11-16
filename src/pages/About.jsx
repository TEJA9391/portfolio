import React from 'react'

export default function AboutPage() {
    return (
        <main style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '36px 20px' }}>
            <section className="fade-in">
                <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 20 }}>About Me</h1>

                <div className="card" style={{ marginBottom: 20 }}>
                    <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Who I Am</h2>
                    <p style={{ lineHeight: 1.6, color: 'var(--muted)' }}>
                        I'm a B.Tech AI/ML student with a passion for leveraging artificial intelligence and full-stack development to solve real-world problems. With hands-on experience in machine learning, web development, and data science, I'm committed to building intelligent and user-friendly applications.
                    </p>
                </div>

                <div className="card" style={{ marginBottom: 20 }}>
                    <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Education</h2>
                    <p style={{ lineHeight: 1.6, color: 'var(--muted)' }}>
                        <strong>B.Tech in Artificial Intelligence & Machine Learning</strong><br />
                        Currently pursuing my undergraduate degree with strong focus on machine learning algorithms, neural networks, and practical AI applications.
                    </p>
                </div>

                <div className="card" style={{ marginBottom: 20 }}>
                    <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Key Projects</h2>
                    <ul style={{ lineHeight: 1.8, color: 'var(--muted)', paddingLeft: 20 }}>
                        <li><strong>Student Aware Study Assistance:</strong> AI-powered platform for personalized learning with computer vision-based engagement tracking.</li>
                        <li><strong>FixHub:</strong> Community service platform connecting users with local professionals using real-time features.</li>
                        <li><strong>Sentiment Analysis Tool:</strong> NLP-based web application for emotional classification with Flask and React.</li>
                    </ul>
                </div>

                <div className="card">
                    <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Let's Connect</h2>
                    <p style={{ lineHeight: 1.6, color: 'var(--muted)' }}>
                        I'm always interested in collaborating on innovative projects, learning new technologies, and connecting with fellow developers and AI enthusiasts. Feel free to reach out!
                    </p>
                </div>
            </section>
        </main>
    )
}
