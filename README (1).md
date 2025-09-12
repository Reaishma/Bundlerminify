# ASP.NET Core Bundler Application

A comprehensive bundling and minification solution for ASP.NET Core applications, featuring multiple bundling strategies and build tools integration.

## Features

### Bundling & Minification
- **Runtime Bundling**: WebOptimizer for dynamic asset optimization
- **Build-time Bundling**: BuildBundlerMinifier with MSBuild integration
- **Task Automation**: Gulp and Webpack support for advanced workflows
- **Cache Management**: Automatic versioning and cache busting

### Technology Stack
- ASP.NET Core 7.0
- WebOptimizer for runtime bundling
- BuildBundlerMinifier for build-time optimization
- Gulp for task automation
- Webpack for module bundling
- Bootstrap for UI framework
- NuGet for package management

## Project Structure

```
├── Controllers/           # MVC Controllers
├── Views/                # Razor Views and Layouts
├── wwwroot/              # Static web assets
│   ├── css/             # Stylesheets
│   ├── js/              # JavaScript files
│   └── lib/             # Third-party libraries
├── bundleconfig.json    # Build-time bundling configuration
├── gulpfile.js          # Gulp task definitions
├── webpack.config.js    # Webpack configuration
├── package.json         # NPM package configuration
├── appsettings.json     # Application settings
└── bundler.csproj       # Project file

```

## Getting Started

### Prerequisites
- .NET 7.0 SDK
- Node.js (for Gulp/Webpack)

### Installation

1. Clone the repository
2. Restore .NET packages:
   ```bash
   dotnet restore
   ```

3. Install NPM packages:
   ```bash
   npm install
   ```

4. Build the application:
   ```bash
   dotnet build
   ```

### Running the Application

#### Development Mode
```bash
dotnet run
```

#### Using Gulp for Development
```bash
npm run dev
```

#### Production Build
```bash
npm run prod
dotnet publish -c Release
```

## Bundling Strategies

### 1. Runtime Bundling (WebOptimizer)
- Configured in `Program.cs`
- Bundles created on-demand
- Virtual URLs: `/css/bundle.css`, `/js/bundle.js`
- Best for development and dynamic scenarios

### 2. Build-time Bundling (BuildBundlerMinifier)
- Configured in `bundleconfig.json`
- Files minified during compilation
- Physical files created in `wwwroot`
- Best for production deployments

### 3. Gulp Tasks
- CSS/JS concatenation and minification
- Sass compilation support
- File watching for development
- Custom build workflows

### 4. Webpack Integration
- Module bundling and code splitting
- Advanced optimization features
- Development and production modes
- Source map generation

## Configuration Files

### bundleconfig.json
Defines build-time bundling rules for BuildBundlerMinifier.

### gulpfile.js
Contains Gulp task definitions for asset processing.

### webpack.config.js
Webpack configuration for module bundling and optimization.

### package.json
NPM package configuration and build scripts.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Run Gulp build tasks |
| `npm run watch` | Watch files for changes |
| `npm run webpack` | Run Webpack in development mode |
| `npm run webpack:prod` | Run Webpack in production mode |
| `npm run dev` | Start development with watching |
| `npm run prod` | Build for production |

## Environment-based Asset Loading

The application automatically switches between development and production assets:

- **Development**: Individual CSS/JS files loaded
- **Production**: Bundled and minified assets loaded

## Performance Features

- **Minification**: JavaScript and CSS size reduction
- **Bundling**: Reduced HTTP requests
- **Caching**: Browser cache optimization with versioning
- **Compression**: Gzip compression enabled via web.config
- **CDN Support**: Configurable for content delivery networks

## Browser Support

- Modern browsers (ES6+ support)
- Internet Explorer 11+ (with polyfills)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions and support, please refer to the project documentation or open an issue.