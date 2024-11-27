const courseDetails = document.querySelector("#course-details");
const coursesContainer = document.querySelector("#coursesContainer");

const courses2 = [
  {
    subject: "CSE",
    number: "110",
    title: "Introduction to Programming",
    credits: 3,
    certificate: "Web and Computer Programming",
    description: "An introductory course in programming.",
    technology: ["Python", "HTML", "CSS"]
  },
  {
    subject: "WDD",
    number: "230",
    title: "Web Development",
    credits: 3,
    certificate: "Web and Computer Programming",
    description: "An introductory course in web development.",
    technology: ["HTML", "CSS", "JavaScript"]
  }
  // Puedes añadir más cursos aquí
];

function displayCourseDetails(course) {
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();

  const closeModal = document.querySelector("#closeModal");
  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}

function createCourseDiv(course) {
  const courseDiv = document.createElement('div');
  courseDiv.className = 'course';
  courseDiv.textContent = `${course.subject} ${course.number} - ${course.title}`;
  courseDiv.addEventListener('click', () => {
    displayCourseDetails(course);
  });
  return courseDiv;
}

function displayCourses(courses) {
  courses.forEach(course => {
    const courseDiv = createCourseDiv(course);
    coursesContainer.appendChild(courseDiv);
  });
}

displayCourses(courses);
