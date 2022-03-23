import Layout from '@components/layout';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';
import Socials from '@components/other/socials';
import SubcribeBar from '@components/subcribe-bar';
import React from 'react';

const About = () => {
  const handleSubmit = (val: { email: string }) => {
    console.log(val);
  };

  return (
    <Layout title="About us">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem>About</BreadcrumbItem>
        </Breadcrumb>
        <div className="about-us">
          <div className="row align-items-center">
            <div className="col-12 col-sm-8 col-md-6 mx-auto">
              <div className="about-us__image">
                <img src="/assets/images/pages/about/Me.jpg" alt="About us image" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="about-us__content">
                <h3>This is my project for CIS453L.</h3>
                <p>
                  Long and sleepless nights but I'm learning a lot from this course.
                </p>
                <p>
                  This is my second to last term until I graduate. 
                </p>
                <div className="follow">
                  <p>Follow me on these social media apps:</p>
                  <Socials
                    spacing={10}
                    height={50}
                    width={50}
                    variant="contained"
                    size="small"
                    shape="circle"
                    color="light"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SubcribeBar onSubmit={handleSubmit} />
      </div>
    </Layout>
  );
};

export default About;
