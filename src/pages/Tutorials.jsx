import CommonNav from "../components/CommonNav";

const Tutorials = () => {
  return (
    <div>
      <CommonNav />
      <div className="flex flex-col justify-center items-center">
        <iframe
          width="788"
          height="443"
          src="https://www.youtube.com/embed/rGrBHiuPlT0?list=PL4071737C12790477"
          title="Introduction - Japanese Lesson 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="mt-4"
          width="788"
          height="443"
          src="https://www.youtube.com/embed/bOUqVC4XkOY?list=PL4071737C12790477"
          title="How to count in Japanese - Japanese Lesson 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="mt-4"
          width="788"
          height="443"
          src="https://www.youtube.com/embed/JnoZE51WZg4?list=PL4071737C12790477"
          title="Days of the Week and Days of the Month - Japanese Lesson 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <iframe
          className="mt-4"
          width="788"
          height="443"
          src="https://www.youtube.com/embed/k74yjmfFb_A?list=PL4071737C12790477"
          title="Going to a Destination - Japanese Lesson 4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Tutorials;
