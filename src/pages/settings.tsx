import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Password } from "primereact/password";

function Settings() {
  return (
    <div className="py-8 px-6 sm:px-10 mb-0 space-y-2 font-mono text-black">
      <label className="my-auto text-xl">Configurações de conta</label>
      <div className="space-y-2 justify-center px-4 gap-2">
        <div>
          <h1>Email da conta</h1>
          <InputText className="mt-2 py-2 px-4"></InputText>
        </div>
        <div className="py-4">
          <h1>Senha da conta</h1>
          <InputText className="mt-2 py-2 px-4"></InputText>
        </div>
      </div>
      <label className="my-auto text-xl">Configurações do robô</label>
      <div className="space-y-2 justify-center px-4 gap-2">
        <div>
          <h1>Lista de proxys</h1>
          <InputTextarea className="mt-2 py-2 px-4" rows={5} cols={30}></InputTextarea>
        </div>
      </div>
    </div>
  );
}

export default Settings;
