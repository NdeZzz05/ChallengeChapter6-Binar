import React, { useEffect, useState } from "react";
import bgfilm from "../../assets/img/bgFilm.jpg";
import { Footer } from "../../assets/components/Footer";
import { Box, Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useCreateUser } from "../../services/auth/register_user";
import { LogoNavbar } from "../../assets/components/LogoNavbar";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const { mutate: regisUser, data } = useCreateUser();

  const registerUser = () => {
    regisUser({
      email: Email,
      name: Username,
      password: Password,
    });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      username: yup.string().required("Mohon isi di kolom berikut").min(3, "Username minimal 3 karakter").max(10, "Username maksimal 10 karakter"),
      email: yup.string().required("Mohon isi di kolom berikut").email("Masukkan email yang valid"),
      password: yup
        .string()
        .required("Mohon isi di kolom berikut")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Kata sandi harus terdapat 8 karakter terdiri dari huruf besar, huruf kecil, angka, dan karakter spesial"),
    }),
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
    if (target.name === "username") {
      setUsername(target.value);
    }
    if (target.name === "email") {
      setEmail(target.value);
    }
    if (target.name === "password") {
      setPassword(target.value);
    }
  };

  useEffect(() => {
    if (data?.data?.data?.token) {
      toast.success("Register Berhasil", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } else if (data?.response?.data?.message === "User has already registered") {
      toast.error("Email sudah terdaftar", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [data]);

  return (
    <>
      <div className="w-screen h-screen">
        <LogoNavbar />
        <div className="w-screen h-screen flex justify-center items-center absolute z-20 px-[1rem]">
          <div className="w-[25rem] bg-black bg-opacity-70 flex rounded-md">
            <Container py="4">
              <Heading color="white" className="flex justify-center items-center">
                Register
              </Heading>
              <Box padding="4" border="" borderRadius="4px" mt="4" px="8">
                <form onSubmit={formik.handleSubmit}>
                  <Stack spacing="1">
                    <FormControl isInvalid={formik.errors.username} isRequired>
                      <FormLabel color="white">Username</FormLabel>
                      <Input onChange={handleForm} type="text" name="username" placeholder="username" backgroundColor="white" color="black" />
                      <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.errors.email} isRequired>
                      <FormLabel color="white">Email</FormLabel>
                      <Input onChange={handleForm} type="email" name="email" placeholder="email" backgroundColor="white" color="black" />
                      <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.errors.password} isRequired>
                      <FormLabel color="white">Password</FormLabel>
                      <Input onChange={handleForm} type="password" name="password" placeholder="password" backgroundColor="white" color="black" />
                      <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                    </FormControl>
                    <Button
                      type="submit"
                      mt="6"
                      color="white"
                      rounded="full"
                      bg="#db0000"
                      _hover={{
                        bg: "#831010",
                      }}
                    >
                      Register Account
                    </Button>
                    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
                  </Stack>
                </form>
                <div className="text-white font-thin flex justify-center items-center pt-[1rem]">
                  Sudah punya akun?
                  <span className=" cursor-pointer font-medium pl-[0.3rem]" onClick={() => navigate(`/`)}>
                    Login sekarang
                  </span>
                </div>
              </Box>
            </Container>
          </div>
        </div>
        <div className="absolute z-10 bg-black opacity-40 w-screen h-screen"></div>
        <img src={bgfilm} alt="background" className="object-cover h-full w-screen" />
        <Footer />
      </div>
    </>
  );
};
