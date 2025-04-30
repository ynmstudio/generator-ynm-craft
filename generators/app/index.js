import Generator from "yeoman-generator";

export default class YnmCraftGenerator extends Generator {

    constructor(args, opts) {
        super(args, opts);
    }

    initializing() {
        this.log('>>> Initializing YNM craft');
    }

    async prompting() {
        this.log('>>> Prompting YNM craft');
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
        this.log('>>> Configuring YNM craft');
        this.config.save();
    }

    default() {
        this.log('>>> Default YNM craft');
    }

    writing() {
        this.log('>>> Writing YNM craft');
        this.fs.copyTpl(
            this.templatePath('dummy.json'),
            this.destinationPath('dummy.json'),
            { title: this.answers.title }
        );
    }

    conflicts() {
        this.log('>>> Conflicts YNM craft');
    }

    install() {
        this.log('>>> Install YNM craft')
    }

    end() {
        this.log('>>> End YNM craft')
    }
}
