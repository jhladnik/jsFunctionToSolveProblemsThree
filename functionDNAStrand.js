// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna){
    let newDNA = {'A':'T', 'T':'A', 'C':'G', 'G':'C'};
    dna=dna.replace(/[ATCG]/g,m=>newDNA[m]);
    return dna
  }
  
  //given the parameter dna which is a string, the compliment of "A" is "T", and the compliment of "C" is "G"; no string should be empty
  //return the inverse of the dna string
  //input("TACG") output("ATGC"); input("TTCCGAA") output("AAGGCTT")
