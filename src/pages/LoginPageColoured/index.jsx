
import { Text, Img, Heading, Button, Input } from "../../components";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import { Link } from "react-router-dom";

export default function LoginPageColouredPage() {
  return (
    <>
      {/* <Helmet>
        <title>Rishi Rishav's Application2</title>
        <meta
          name="description"
          content="web site created using create-react-app"
        />
      </Helmet> */}
      <div className="flex w-full h-screen items-start justify-center gap-2.5 bg-white-a700 px-14 py-16 md:flex-col md:p-5">
        <div className="flex">
          <Img
            src="images/img_logo_civique.png"
            alt="Logocivique"
            className="h-[62px] w-full object-cover md:h-auto"
          />
        </div>
        <div className="mb-[226px] flex flex-1 items-center px-2.5 ml-[20px] md:flex-col md:self-stretch">
          <Img
            src="images/img_image.svg"
            alt="Image"
            className="mb-5 h-[550px] w- [60%] self-end object-contain md:w-full md:self-auto"
          />

          <div className="flex w-[38%] flex-col items-start gap-[66px] px-[34px] ml-[100px] md:w-full sm:gap-[33px] sm:px-5">
            <Heading
              size="headingxl"
              as="h1"
              className="ml-5 !font-opensans !text-black-900 md:ml-0"
            >
              Login your account!
            </Heading>
            <Tabs
              className="flex flex-col gap-[54px] self-stretch sm:gap-[27px]"
              // style={{height: '350px'}}
              selectedTabClassName="!text-black-900 text-[18px] bg-white-a700_e5 shadow-sm"
              selectedTabPanelClassName="!relative tab-panel--selected"
            >
              <TabList className="flex flex-wrap items-center gap-[34px]">
                <Tab className="px-9 py-2.5 font-inter text-[16px] font-normal text-black-900_d8 sm:px-5">
                  E-mail
                </Tab>
                <Tab className="px-9 py-2.5 font-inter text-[16px] font-normal text-black-900_d8 sm:px-5">
                  Mobile Number
                </Tab>
              </TabList>
              {[...Array(2)].map((_, index) => (
                <TabPanel
                  key={`tab-panel${index}`}
                  className="absolute items-center"
                >
                  <div className="w-full">
                    <div className="flex flex-col items-center">
                      <div className="flex flex-col items-start gap-1.5 self-stretch">
                        <Heading
                          size="headings"
                          as="h2"
                          className="!font-inter !font-bold !text-black-900"
                        >
                          {index === 0
                            ? "Enter your email address"
                            : "Enter your mobile number"}
                        </Heading>
                        <Input
                          color="black 900"
                          variant="outline"
                          shape="square"
                          type={index === 0 ? "email" : "tel"}
                          name={index === 0 ? "email" : "mobileNumber"}
                          placeholder={
                            index === 0 ? "example@gmail.com" : "7846573945"
                          }
                          className="w-[62%] border border-gray-400"
                        />
                      </div>
                      <div className="mt-[30px] self-stretch">
                        <div className="flex flex-col items-start">
                          <div className="flex items-center gap-[100px] self-stretch">
                            <Heading
                              size="headings"
                              as="h3"
                              className="!font-inter !font-bold !text-black-900"
                            >
                              Enter your Password
                            </Heading>
                            {/* <Img
                              src="images/img_mdi_eye_closed.svg"
                              alt="Mdieyeclosed"
                              className="h-[24px] w-[24px] self-end"
                            /> */}
                          </div>
                          <Input
                            color="black 900"
                            variant="outline"
                            shape="square"
                            type="password"
                            name="password"
                            placeholder={`Password`}
                            className="w-[62%] !text-gray-500 border border-gray-400"
                          />
                        </div>
                      </div>
                      <a
                        href="/LoginPageColouredPage"
                        className="mr-[220px] mt-3 self-end md:mr-0"
                      >
                        <Heading
                          size="headingxs"
                          as="h4"
                          className="!font-inter !font-bold !text-black-900"
                        >
                          Forgot password?
                        </Heading>
                      </a>
                      <Button
                        color="blue_gray_800_01"
                        size="md"
                        className="ml-[114px] mt-6 min-w-[110px] self-start rounded- [5px] font-roboto font-bold tracking-[0.64px] md:ml-0"
                      >
                        <Link to="/Homepagecoloured" className="">
                          Sign in
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TabPanel>
              ))}
              <div className="mx-[46px] flex flex-col items-start md:mx-0">
                <Heading
                  size="headings"
                  as="h5"
                  className="ml-[76px] !font-inter !font-bold !text-gray-800 md:ml-0"
                >
                  Sign in With
                </Heading>
                <div className="ml-[66px] mt-5 flex items-center gap-[37px] md:ml-0">
                  <div className="flex h-[28px] flex-col items-center bg-[url(/public/images/img_group_36.svg)] bg-cover bg-no-repeat px-2 md:h-auto">
                    <Img
                      src="images/img_facebook.svg"
                      alt="facebook"
                      className="mt-0 h-[30px]"
                    />
                  </div>
                  <Img
                    src="images/img_devicon_google.svg"
                    alt="google"
                    className="h-[28px] w- [28px]"
                  />
                </div>
                <Text size="textlg" as="p" className="mt-1 !font-inter">
                  <span className="text-white-a700">
                    Already have an account?&nbsp;
                  </span>
                  <span className="font-semibold text-white-a700">Log in</span>
                </Text>
                <Text
                  size="textlg"
                  as="p"
                  className="mt-1.5 !font-inter !text-black-900 md:ml-0"
                >
                  <span className="text-black-900">
                    Don't have an account?&nbsp;
                  </span>
                  <a href="/registerpagecoloured">
                    <span className="font-semibold text-black-900">
                      Sign up
                    </span>
                  </a>
                </Text>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
