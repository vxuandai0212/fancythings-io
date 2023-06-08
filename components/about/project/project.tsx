import {
  Container,
  Heading,
  ProjectContainer,
  ProjectDescription,
  ProjectItem,
  Thumbnail,
  ThumbnailShadow,
  TitleSection,
  Title,
  Category,
  Description,
  TechDescription,
  AccessButton,
  AccessButtonContainer
} from "components/about/project/project-style"

const PROJECTS = [
  {
    backgroundUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'yummy',
    category: 'Mobile',
    description: 'Tra cứu công thức nấu ăn',
    techDescription: 'Công nghệ: react-native, redux, redux-saga, nodejs, mysql'
  },
  {
    backgroundUrl: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'fancythings.io',
    category: 'Website',
    description: 'Blog cá nhân',
    techDescription: 'Công nghệ: nextjs, nodejs, mysql'
  }
]

const Project = () => {
  const projectItems = PROJECTS.map((item) => (
    <ProjectItem key={item.title}>
      <Thumbnail backgroundUrl={item.backgroundUrl}>
        <ThumbnailShadow backgroundUrl={item.backgroundUrl}/>
      </Thumbnail>
      <TitleSection>
        <Title>{item.title}</Title>
        <Category>{item.category}</Category>
      </TitleSection>
      <ProjectDescription>
        <Description>
          {item.description}
        </Description>
      </ProjectDescription>
      {/* <TechDescription>
        <Description>
          {item.techDescription}
        </Description>
      </TechDescription> */}
      <AccessButtonContainer>
        <AccessButton>Truy cập</AccessButton>
      </AccessButtonContainer>
    </ProjectItem>
  ))
  return (
    <Container>
      <Heading>Dự án</Heading>
      <ProjectContainer>
        { projectItems }
      </ProjectContainer>
    </Container>
  )
}

export default Project
