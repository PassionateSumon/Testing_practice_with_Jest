import { useEffect, useState } from "react";

export const Skills = (props: any) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoggedIn(true);
  //   }, 2000);
  // }, []);

  return (
    <>
      <ul>
        {skills.map((skill: string) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};
