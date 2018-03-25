<style>{`#autocolor, #edu { color: ${colors.slate} !important; }`}</style>
{sections.map(section => (
  <Box id={kebabCase(section[0])} key={kebabCase(section[0])} py={2}>
    <SectionHeading icon={section[1]} children={section[0]} />
    <ProjectGrid>
      {section[2].map(item => (
        <Project
          name={item.name}
          url={item.url}
          description={item.description}
          color={item.color}
          key={item.url}
        />
      ))}
    </ProjectGrid>
  </Box>
))}
