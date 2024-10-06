<template>
  <div class="flex flex-col py-10 px-6 space-y-8 items-center justify-center">
    <!-- Test Data Generator -->
    <ProjectCard
      projectName="Test Data Generator"
      projectDescription="Generate a large set of EPCIS events based on use cases/supply chain design."
      :techStack="[
        'Nuxt 3',
        'Vue.js',
        'Java',
        'Quarkus',
        'Jackson',
        'Drawflow',
        'etc.',
      ]"
      :highlights="[
        'Designed and implemented the entire application, including front-end and back-end systems.',
        'Implemented back-end in Java to generate EPCIS events based on input templates.',
        'Enabled front-end to support full supply chain design and create input templates.',
        'Able to generate thousands or millions of events on the go without any memory issues.',
      ]"
      :githubLink="'https://github.com/openepcis/epcis-testdata-generator'"
      :projectLink="'https://test-data-generator.openepcis.io/'"
    />

    <!-- Document Converter -->
    <ProjectCard
      projectName="Format Converter"
      projectDescription="Convert EPCIS documents from XML <-> JSON adhering to standard."
      :techStack="[
        'Java',
        'JAXB/Jakarta',
        'Moxy',
        'Jackson',
        'Nuxt 3',
        'XML',
        'JSON/JSON-LD',
        'etc.',
      ]"
      :highlights="[
        'User-provided XML/JSON data is serialized/deserialized from Java Objects to XML/JSON.',
        'Writing custom logic to handle the EPCIS attributes as per the standard.',
        'Using the stream-based approach to handle large set of data with minimal memory usage.',
      ]"
      :githubLink="'https://github.com/openepcis/openepcis-document-converter'"
      :projectLink="'https://tools.openepcis.io/ui/format-converter/'"
    />

    <!-- XML Transformer -->
    <ProjectCard
      projectName="XML transformer"
      projectDescription="Convert EPCIS documents from XML 1.2 <-> 2.0 adhering to standard."
      :techStack="['Java', 'SAX Parser', 'XALAN', 'XSLT', 'XML', 'etc.']"
      :highlights="[
        'Reading the XML documents using the SAX Parser.',
        'Writing complex logic to handle various EPCIS attributes as per the standard.',
        'Using the stream based approach to handle a single event at a time to minimize memory usage.',
      ]"
      :projectLink="'https://tools.openepcis.io/ui/format-converter/'"
    />

    <!-- Event Hash Generator -->
    <ProjectCard
      projectName="Hash Generator"
      projectDescription="Generate unique event hash for EPCIS event based on information in it."
      :techStack="[
        'Java',
        'Jackson',
        'Sax parser',
        'Nuxt 3',
        'XML',
        'JSON/JSON-LD',
        'etc.',
      ]"
      :highlights="[
        'Parse and read the user-provided XML/JSON documents.',
        'Extract the information and using complex comparator algorithms order the fields and values.',
        'Generate a single string and hash-id based on it.',
      ]"
      :githubLink="'https://github.com/openepcis/openepcis-event-hash-generator'"
      :projectLink="'https://tools.openepcis.io/ui/event-hash-generator/'"
    />

    <!-- OpenEPCIS website -->
    <ProjectCard
      projectName="OpenEPCIS Web Application"
      projectDescription="Corporate website to describe our projects and work."
      :techStack="[
        'Nuxt content',
        'Tailwind CSS',
        'Hugo',
        'Docsy',
        'Sitemap/SEO',
        'etc.',
      ]"
      :highlights="[
        'Design and develop responsive web application to highlight our work and company.',
        'Using the Docsy theme or Nuxt content to read and present Markdown (.md) files.',
        'Use OpenEPCIS themes to support light/dark mode and Internationalization (i18n).',
      ]"
      :projectLink="'https://openepcis.io/'"
    />

    <!-- Digital Link Translator -->
    <ProjectCard
      projectName="Digital Link Translator"
      projectDescription="Convert GS1 EPCIS identifiers from URN <-> Digitallink and vice versa."
      :techStack="['Java', 'junit', 'Apache Commons', 'Project Lombok', 'etc.']"
      :highlights="[
        'Validate and Convert various GS1 identifiers from URN to new Digital link format.',
        'Convert the identifiers effectively and efficiently as per the standard.',
        'Also support conversion of the GS1 web vocabulary to bare string and vice versa.',
      ]"
      :projectLink="'https://tools.openepcis.io/ui/format-converter'"
      :githubLink="'https://github.com/openepcis/openepcis-epc-digitallink-translator'"
    />

    <!-- GS1 Web Vocabulary to XSD -->
    <ProjectCard
      projectName="JSON-LD/RDF to XSD Converter"
      projectDescription="Convert GS1 Web vocabulary contents in JSON-LD/RDF to XSD/Java classes."
      :techStack="['Java', 'Apache Jena', 'JAXB', 'Jackson', 'Lombok', 'etc.']"
      :highlights="[
        'Converts the provided JSON-LD schema/RDF contents into the respective XSD. ',
        'Uses the generic approach to handle the conversion so can be used for any JSON-LD/RDF data.',
        'Also added the JAXB plugin to convert the generated XSD to convert into Java classes.',
      ]"
    />

    <!-- Newsfeed aggregator for TUC -->
    <ProjectCard
      projectName="Newsfeed Aggregator"
      projectDescription="Aggregate news from various RSS feed and display on web page."
      :techStack="[
        'Node.js',
        'jQuery',
        'jQGrid',
        'Bootstrap',
        'HTML',
        'CSS',
        'etc.',
      ]"
      :highlights="[
        'Display news/articles from various provided sources by aggregating and refreshing periodically.',
        'Keep only the recent news articles and delete the older items as per user preference.',
        'Add/Remove RSS feed as per user preference.',
      ]"
      :githubLink="'https://github.com/Aravinda93/Web-Feed-Aggregator'"
    />

    <!-- Client Contact tool at Cerner -->
    <ProjectCard
      projectName="Client Contact Tool"
      projectDescription="Tool to search and obtain the contact person associated to various teams"
      :techStack="[
        'jQuery',
        'PHP',
        'SQL Server',
        'jQGrid',
        'HTML',
        'CSS',
        'AJAX',
        'etc.',
      ]"
      :highlights="[
        'Tool used by various teams to search for respective contact person for issue escalations.',
        'Replaced the old Excel based approach with advanced web-based solution.',
        'Allowed only certain users to add/modify the information while ensuring other users with view permission.',
      ]"
    />
  </div>
</template>

<script setup>
useHead({
  title: "Projects",
});
</script>