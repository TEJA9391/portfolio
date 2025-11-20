export default function StudentAware() {
    return (
        <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
            <h1>Student Aware Study Assistance</h1>

            <p style={{ marginTop: "10px", lineHeight: "1.7" }}>
                Student Aware Study Assistance is an AI-powered platform that analyzes
                student engagement using computer vision and machine learning. It provides
                personalized learning recommendations based on real-time focus tracking.
            </p>

            <h2 style={{ marginTop: "20px" }}>Key Features</h2>
            <ul style={{ lineHeight: "1.7" }}>
                <li>Real-time face detection and eye-tracking</li>
                <li>Deep learning engagement prediction using TensorFlow</li>
                <li>Focus score calculation based on blink rate and gaze direction</li>
                <li>Personalized study recommendations</li>
                <li>Analytics dashboard for productivity tracking</li>
            </ul>

            <h2 style={{ marginTop: "20px" }}>Tech Stack</h2>
            <ul style={{ lineHeight: "1.7" }}>
                <li><strong>Python</strong> – backend & ML processing</li>
                <li><strong>TensorFlow</strong> – engagement model</li>
                <li><strong>OpenCV</strong> – visual recognition</li>
                <li><strong>React</strong> – UI dashboard</li>
            </ul>

            <h2 style={{ marginTop: "20px" }}>Problem Solved</h2>
            <p style={{ lineHeight: "1.7" }}>
                Many students struggle with maintaining focus during study time. This system
                tracks engagement and provides recommendations to improve productivity.
            </p>
        </div>
    );
}
