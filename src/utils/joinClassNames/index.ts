type classes = string | undefined

const joinClassNames = (...classNames: classes[]) => {
  return classNames.join(' ')
}

export default joinClassNames
