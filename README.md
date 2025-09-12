# ASP.NET Core Bundler Application

A comprehensive bundling and minification solution for ASP.NET Core applications, featuring multiple bundling strategies and build tools integration.The project serves as a showcase for different bundling strategies including build-time and runtime optimization techniques for CSS and JavaScript files.

# 🚀 Live page

**Bundlerminify**- https://reaishma.github.io/Bundlerminify/

## Developer 

**Reaishma N**


# System Architecture

## Frontend Architecture

The frontend follows a traditional web architecture with server-rendered pages and static assets:

- **Static Asset Organization**: Assets are organized in the standard `wwwroot` folder structure with separate directories for CSS and JavaScript files
- **Bundling Strategy**: Implements a dual bundling approach using both build-time and runtime bundling for maximum flexibility
- **UI Framework**: Uses Bootstrap for responsive design and basic UI components
- **Custom Styling**: Site-specific styles in `site.css` with custom branding and layout modifications

## Backend Architecture

Built on ASP.NET Core 7.0 with a focus on asset optimization:

- **Framework**: ASP.NET Core 7.0 with MVC pattern for web application structure
- **Asset Pipeline**: Multiple bundling and minification strategies working in tandem
- **Build Integration**: MSBuild integration for automated asset processing during compilation
- **Static File Serving**: Built-in ASP.NET Core static file middleware for serving optimized assets

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
## Asset Optimization Strategy

The application implements a comprehensive asset optimization approach:

- **Build-Time Bundling**: Uses BuildBundlerMinifier for creating minified bundles during compilation
- **Runtime Bundling**: LigerShark WebOptimizer provides dynamic bundling with caching and versioning
- **Configuration-Driven**: `bundleconfig.json` defines specific bundling rules for different asset combinations
- **Cache Busting**: Automatic versioning for cache invalidation in production environments

The bundling configuration creates multiple output targets:
- Individual minified files (`site.min.css`, `site.min.js`)
- Combined bundles (`bundle.min.css`, `bundle.min.js`) that include both custom and Bootstrap assets

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
- **Development vs Production**: Different optimization levels based on environment


## External Dependencies

### NuGet Packages

- **BuildBundlerMinifier (3.2.449)**: Build-time asset bundling and minification
- **BundlerMinifier.Core (3.2.449)**: Core bundling functionality and MSBuild integration
- **LigerShark.WebOptimizer.Core (3.0.384)**: Runtime asset optimization and bundling
- **Microsoft.Web.LibraryManager.Build (2.1.175)**: Client-side library management during build

### Third-Party Libraries

- **Bootstrap**: CSS framework for responsive design and UI components
- **NUglify**: JavaScript and CSS minification engine used by bundling tools
- **Newtonsoft.Json**: JSON serialization for configuration and bundling metadata

### Build Tools

- **MSBuild Integration**: Automatic bundling during project compilation
- **Static Web Assets**: ASP.NET Core's built-in system for managing and serving static files
- **LibraryManager**: For managing client-side dependencies and updates

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
