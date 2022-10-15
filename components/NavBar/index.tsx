import Image from "next/image";
import React, { useState } from "react";
import { Container, LogoContainer, Logoinner, IconContainer, ProfileContainer } from "./styles";

const NavBar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const renderIcon = () => {
    return (
      <Image
        src={
          theme === "light" ? "/assets/icon-moon.svg" : "/assets/icon-sun.svg"
        }
        alt={"theme"}
        width={20}
        height={20}
        style={{ marginLeft: "auto" }}
        onClick={handleTheme}
      />
    );
  };

  return (
    <Container>
      <LogoContainer>
        <Image
          src={"/assets/logo.svg"}
          alt={"Logo"}
          width={28}
          height={28}
          style={{ zIndex: 2 }}
        />
        <Logoinner />
      </LogoContainer>
      <IconContainer>{renderIcon()}</IconContainer>
      <ProfileContainer>
        <Image
          src={"/assets/image-avatar.jpg"}
          alt={"profile picture"}
          width={28}
          height={26}
          style={{ borderRadius: "50%" }}
        />
      </ProfileContainer>
    </Container>
  );
};

export default NavBar;
