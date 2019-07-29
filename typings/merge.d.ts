declare module 'merge' {
  interface ModuleType {
    recursive: <Base, Extend>(
      clone: boolean,
      base: Base,
      extend: Extend
    ) => Base
  }

  const Module: ModuleType = () => {}

  export default Module
}
