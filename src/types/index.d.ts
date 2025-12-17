declare module '*.css';

declare module '*.module.css' {
    const content: Record<string, string>;
    export default content;
}
// Add similar lines for other preprocessors if needed (scss, sass, less, etc.)
declare module '*.module.scss' {
    const content: Record<string, string>;
    export default content;
}