@component
export class ReproduceIssue extends BaseScriptComponent {
    @input
    remoteServiceModule: RemoteServiceModule;

    async onAwake() {
        const request = new Request("https://randomuser.me/api/", {
            method: "GET",
        });

        const response = await this.remoteServiceModule.fetch(request);
        if (response.status === 200) {
            print("Request successful");
            const data = await response.json();
            const undefinedField = data.undefinedField;
            undefinedField.doSomething(); // This will throw an error
            print("never reached");
        }
    }
}
