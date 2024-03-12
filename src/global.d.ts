declare module '*.svg' {
  const src: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >
  export default src
}

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}
