// ############################################
// ## Função para encriptografar com SHA-256 ##
// ############################################

function CRIPTSHA(input) {
  if (!input) {
    return 'Entrada vazia';
  }
  // Converte o texto em um hash SHA-256
  const hash = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    input,
    Utilities.Charset.UTF_8
  );

  // Converte o hash em formato hexadecimal
  return hash.map(byte => {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join('');
}
