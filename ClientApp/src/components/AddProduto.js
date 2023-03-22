import React, { Component } from "react"


export class Produto {
    constructor() {
        this.id = 0;
        this.descricao = "";
    }
}

export class AddProduto extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", produto: new Produto(), loading: true }
        this.inicialize();
        this.HandleCancel = this.HandleCancel.bind(this);
        this.HandleSalvar = this.HandleSalvar.bind(this);
    }

    async inicialize() {

        var id = this.props.match.params["id"];
        if (id > 0) {
            const response = await fetch('api/Produtos/' + id);
            const data = await response.json();
            this.setState({ title: "Edit", produto: new Produto(), loading: false });
        }
        else {

            this.state = { title: "Create", produto: new Produto(), loading: false };
        }
    }
    render() {
        let contents = this.state.loading
            ? <p><em> Carregando... </em> </p>
            : this.renderCreateForm();

        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>Produto</h3>
                {contents}
            </div>
        );


    }
    HandleCancel(event) {
        event.preventDefault();
        this.props.history.push("/fetch-Product");

    }
    HandleSalvar(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        if (this.state.produto.id >0) {
            const response1 = fetch('api/Produtos/' + this.state.produto.id, { method: "PUT", body: data });
            this.props.history.push("/fetch-Product");
        }
        else {
            const response2 = fetch('api/Produtos/' , { method: "POST", body: data });
            this.props.history.push("/fetch-Product");
        }

    }


    renderCreateForm() {
        return (
            <form onSubmit={this.HandleSalvar}>
                <div className="form-group row">
                    <input type="hidden" name="id" value={this.state.produto.id} />
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <input className="form-control" type="text" name="description" defaultValue={this.state.produto.descricao} required />
                    </div>
                </div>
                <div className="form=group">
                    <button type="submit" className="btn btn-sucess" value={this.state.produto.id}>Salvar</button>
                    <button className="btn btn-danger" onClick={this.HandleCancel}>Cancelar</button>

                </div>

            </form>

        );
    }


}
               


