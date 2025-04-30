import Generator from "yeoman-generator";

export default class YnmCraftGenerator extends Generator {

    constructor(args, opts) {
        super(args, opts);
    }

    initializing() {
        this.log('>>> Initializing YNM craft v0.2.0');
    }

    async prompting() {
        this.log('>>> Prompting YNM craft v0.2.0');
        this.answers = await this.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
                store: true
            },
        ]);
    }

    configuring() {
        this.log('>>> Configuring YNM craft v0.2.0');
        this.config.save();
    }

    default() {
        this.log('>>> Default YNM craft v0.2.0');
    }

    writing() {
        this.log('>>> Writing YNM craft v0.2.0');
        this.fs.copyTpl(
            this.templatePath('dummy.json'),
            this.destinationPath('dummy.json'),
            { title: this.answers.title }
        );
    }

    conflicts() {
        this.log('>>> Conflicts YNM craft v0.2.0');
    }

    install() {
        this.log('>>> Install YNM craft v0.2.0')
    }

    end() {
        this.log('>>> End YNM craft v0.2.0')
    }
}
