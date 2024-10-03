<template>
  <div class="flex flex-col py-10 px-6 space-y-8 items-center justify-center">
    <!-- Test Data Generator -->
    <ProjectCard
      projectName="EPCIS Test Data Generator"
      projectDescription="Generate a large set of EPCIS test data events for all use cases/supply chain requirements."
      :techStack="[
        'Nuxt 3',
        'Vue.js',
        'Java',
        'Quarkus',
        'Jackson',
        'Drawflow',
        'Many more...',
      ]"
      :highlights="[
        'Designed and developed the front-end and back-end of the application.',
        'Back-end java uses the inputTemplate based on which EPCIS events are generated.',
        'Front-end can support complete supply chain design and generate inputTemplate based on it.',
        'Able to generate thousands or millions of events on the go without any memory issues.',
      ]"
      :githubLink="'https://github.com/openepcis/epcis-testdata-generator'"
      :projectLink="'https://test-data-generator.openepcis.io/'"
    />

    <!-- Document Converter -->
    <ProjectCard
      projectName="EPCIS Document Format Converter"
      projectDescription="Convert EPCIS documents from XML <-> JSON with ease."
      :techStack="[
        'Java',
        'Jakarta',
        'Moxy',
        'Jackson',
        'Nuxt 3',
        'XML',
        'JSON/JSON-LD',
        'Many more...',
      ]"
      :highlights="[
        'User provided XML/JSON data is serialized/deserialized from Java Objects to XML/JSON.',
        'Writing custom logics to handle the EPCIS attributes as per the standard.',
        'Using the stream based approach to handle large set of data with minimal memory usage.',
      ]"
      :githubLink="'https://github.com/openepcis/openepcis-document-converter'"
      :projectLink="'https://tools.openepcis.io/ui/format-converter/'"
    />

    <!-- Event Hash Generator -->
    <ProjectCard
      projectName="EPCIS Event Hash Generator"
      projectDescription="Generate unique event hash for EPCIS event based on information in it."
      :techStack="[
        'Java',
        'Jackson',
        'Sax parser',
        'Nuxt 3',
        'XML',
        'JSON/JSON-LD',
        'Many more...',
      ]"
      :highlights="[
        'Parse and read the user provided XML/JSON documents.',
        'Extract the information and using complex comparator algorithams order the fields and values.',
        'Generate single string and hash-id based on it.',
      ]"
      :githubLink="'https://github.com/openepcis/openepcis-event-hash-generator'"
      :projectLink="'https://tools.openepcis.io/ui/event-hash-generator/'"
    />
  </div>
</template>