class AtomicResponseDTO {
    contructor(data){
        this.result = data.result||null;
        this.message = data.message||null;
    }
}

module.exports = AtomicResponseDTO;