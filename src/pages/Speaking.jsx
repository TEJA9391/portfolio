import React from 'react'

export default function Speaking() {
    const talks = [
        {
            title: 'AI in Education: Personalizing Learning with ML',
            event: 'Tech Conference 2024',
            date: 'December 10, 2024',
            description: 'Presentation on how machine learning is revolutionizing personalized education and student engagement tracking.'
        },
        {
            title: 'Full-Stack Development with React & Flask',
            event: 'Developer Meetup',
            date: 'November 22, 2024',
            description: 'Workshop covering best practices for building scalable web applications using modern frontend and backend technologies.'
        },
        {
            title: 'Computer Vision Applications in Real-World Scenarios',
            event: 'AIML Student Summit',
            date: 'November 15, 2024',
            description: 'Talk about practical applications of computer vision in healthcare, security, and automation industries.'
        }
    ]

    return (
        <main style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '36px 20px' }}>
            <section className="fade-in">
                <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10 }}>Speaking & Appearances</h1>
                <p style={{ color: 'var(--muted)', marginBottom: 30 }}>Recent talks, workshops, and conference appearances</p>

                <div style={{ display: 'grid', gap: 20 }}>
                    {talks.map((talk, idx) => (
                        <div key={idx} className="card">
                            <h3 style={{ margin: '0 0 8px 0', fontWeight: 600 }}>{talk.title}</h3>
                            <p style={{ margin: '0 0 4px 0', fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>{talk.event}</p>
                            <p style={{ margin: '0 0 12px 0', fontSize: 13, color: 'var(--muted)' }}>{talk.date}</p>
                            <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.6 }}>{talk.description}</p>
                        </div>
                    ))}
                </div>

                <div className="card" style={{ marginTop: 30, backgroundColor: 'rgba(35, 35, 35, 0.03)' }}>
                    <h3 style={{ margin: '0 0 12px 0', fontWeight: 600 }}>Interested in Having Me Speak?</h3>
                    <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.6 }}>
                        I'm open to speaking engagements, workshops, and podcast appearances. Topics include AI/ML applications, web development, and emerging tech trends. Feel free to reach out!
                    </p>
                </div>
            </section>
        </main>
    )
}
