# hygen-sample
This is a project that demonstrates the usage of Hygen to template code and automate repetitive tasks.

### getting Started 
Follow the steps below to get started with the project:

1. clone the repository

```
https://github.com/woori3104/hygen-sample.git
```

2. install the project dependencies

```
npm install
```

3. Install Hygen globally

```
npm install -g hygen
```

4. Generate code using Hygen:

```
hygen component new
```
or 
```
npm run new
```
This command will prompt you to select the Atomic Design category, provide the component name, and choose the directory within src/components where the component should be created. Hygen will then generate the necessary files based on the provided inputs.

### Folder Structure
The project follows a typical folder structure
```
hygen-sample/
  ├── src/
  │   ├── components/
  │   │   ├── atoms/
  │   │   ├── molecules/
  │   │   ├── organisms/
  │   │   └── templates/
  │   ├── styles/
  │   └── ...
  ├── public/
  ├── package.json
  ├── .gitignore
  └── README.md
```