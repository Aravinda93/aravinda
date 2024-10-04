<template>
  <div class="flex flex-col py-10 px-6 space-y-8 items-center justify-center">
    <JobExperience
      :companyInitials="'ben'"
      :companyName="'benelog GmbH & Co. KG'"
      :duration="'Dec 2020 – Current'"
      :city="'Kerpen'"
      :country="'Germany'"
      :website="'https://openepcis.io'"
      :tasks="company1Tasks"
    />

    <JobExperience
      :companyInitials="'GS1'"
      :companyName="'GS1 Germany'"
      :duration="'Jun 2020 – Nov 2020'"
      :city="'Köln'"
      :country="'Germany'"
      :website="'https://www.gs1-germany.de'"
      :tasks="company2Tasks"
    />

    <JobExperience
      :companyInitials="'J&J'"
      :companyName="'Johnson & Johnson (Previously Surgical Process Institute)'"
      :duration="'Mar 2019 – May 2020'"
      :city="'Chemnitz'"
      :country="'Germany'"
      :website="'https://www.jnjmedtech.com/de-DE'"
      :tasks="company3Tasks"
    />

    <JobExperience
      :companyInitials="'OR'"
      :companyName="'Oracle Cerner (Previously Cerner Corporation)'"
      :duration="'Jun 2016 – Sep 2018'"
      :city="'Bangalore'"
      :country="'India'"
      :website="'https://www.cerner.com/de/de'"
      :tasks="company4Tasks"
    />

    <JobExperience
      :companyInitials="'UST'"
      :companyName="'UST Global'"
      :duration="'Apr 2015 – Jun 2016'"
      :city="'Kochi'"
      :country="'India'"
      :website="'https://www.ust.com'"
      :tasks="company5Tasks"
    />
  </div>
</template>
  

<script setup>
const company1Tasks = ref([
  "Developed a Test Data Generator that automates and creates millions of EPCIS events.",
  "Built an XML to JSON-LD converter, enabling the conversion of millions of events in seconds.",
  "Designed an Event Hash Generator to identify unique EPCIS events and prevent duplication.",
  "Created an EPCIS URN to WebURI converter tool to support EPCIS 2.0 standard.",
  "Implemented an EPCIS event validation tool to ensure XML/JSON events conform to schemas.",
  "Developed a tool to transform JSON-LD/RDF into XSD for complex data structures.",
  "Built various front-end web applications and REST APIs for users and developers.",
]);

const company2Tasks = ref([
  "Designed and implemented an interactive tool to generate thousands of EPCIS events in seconds.",
  "Collaborated with industry users to gather requirements and deliver customized solutions.",
  "Authored a comprehensive report detailing the entire implementation process and use cases.",
]);

const company3Tasks = ref([
  "Supported regular testing and maintenance to ensure optimal application performance.",
  "Reporting bug tickets and collaborating with developers for application efficiency improvement.",
  "Created a PractiTest-based dashboard for testing oversight, reducing manual efforts.",
]);

const company4Tasks = ref([
  "Developed complex CCL queries and automation scripts, reducing a lot of manual efforts.",
  "Developed a self-healing automation script to prevent ticket escalation to production support.",
  "Created a web application to replace Excel for client contact management for various teams.",
  "Built a backend tool to auto-generate tickets for tracking workloads from client domain automation.",
  "Supported new team members with tasks and provided knowledge transfer.",
]);

const company5Tasks = ref([
  "Developed complex SQL queries to automate application data testing, reducing manual effort.",
  "Performed regular testing and maintenance to ensure smooth application functioning.",
  "Supported production deployments and conducted regression testing.",
]);

useHead({
  title: "Aravinda | Home",
});
</script>