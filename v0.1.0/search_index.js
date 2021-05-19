var documenterSearchIndex = {"docs":
[{"location":"api/","page":"API","title":"API","text":"CurrentModule = Spglib","category":"page"},{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/#Types","page":"API","title":"Types","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"There are two types, Dataset and SpacegroupType, correspond to SpglibDataset and SpglibSpacegroupType, respectively. They store basic information of a symmetry search. The struct Cell is to contain input data of a symmetry search.","category":"page"},{"location":"api/","page":"API","title":"API","text":"Cell\nDataset\nSpacegroupType","category":"page"},{"location":"api/#Spglib.Cell","page":"API","title":"Spglib.Cell","text":"Cell(lattice, positions, types, magmoms=nothing)\n\nThe basic input data type of Spglib.\n\nLattice parameters lattice are given by a 3×3 matrix with floating point values, where 𝐚, 𝐛, and 𝐜 are given as rows, which results in the transpose of the definition for C-API. Fractional atomic positions positions are given by a N×3 matrix with floating point values, where N is the number of atoms. Numbers to distinguish atomic species types are given by a list of N integers. The collinear polarizations magmoms only work with get_symmetry and are given as a list of N floating point values.\n\n\n\n\n\n","category":"type"},{"location":"api/#Spglib.Dataset","page":"API","title":"Spglib.Dataset","text":"This represents SpglibDataset, see https://spglib.github.io/spglib/dataset.html#spglib-dataset.\n\n\n\n\n\n","category":"type"},{"location":"api/#Spglib.SpacegroupType","page":"API","title":"Spglib.SpacegroupType","text":"This represents SpglibSpacegroupType, see https://spglib.github.io/spglib/api.html#spg-get-spacegroup-type.\n\n\n\n\n\n","category":"type"},{"location":"api/#Methods","page":"API","title":"Methods","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Some methods are exported here. You can find their official documentation on this page.","category":"page"},{"location":"api/","page":"API","title":"API","text":"get_hall_number_from_symmetry\nget_dataset\nget_spacegroup_type\nget_international\nget_schoenflies\nstandardize_cell\nfind_primitive\nrefine_cell\nniggli_reduce!\ndelaunay_reduce!\nget_multiplicity\nget_ir_reciprocal_mesh\nget_version","category":"page"},{"location":"api/#Spglib.get_hall_number_from_symmetry","page":"API","title":"Spglib.get_hall_number_from_symmetry","text":"get_hall_number_from_symmetry(rotation::AbstractArray{T,3}, translation::AbstractMatrix, num_operations::Integer, symprec=1e-5) where {T}\n\nObtain hall_number from the set of symmetry operations.\n\nThis is expected to work well for the set of symmetry operations whose distortion is small. The aim of making this feature is to find space-group-type for the set of symmetry operations given by the other source than spglib. Note that the definition of symprec is different from usual one, but is given in the fractional coordinates and so it should be small like 1e-5.\n\n\n\n\n\n","category":"function"},{"location":"api/#Spglib.get_dataset","page":"API","title":"Spglib.get_dataset","text":"get_dataset(cell::Cell, symprec=1e-8)\n\nSearch symmetry operations of an input unit cell structure.\n\n\n\n\n\n","category":"function"},{"location":"api/#Spglib.get_spacegroup_type","page":"API","title":"Spglib.get_spacegroup_type","text":"get_spacegroup_type(hall_number)\n\nTranslate Hall number to space group type information.\n\n\n\n\n\n","category":"function"},{"location":"api/#Spglib.get_international","page":"API","title":"Spglib.get_international","text":"get_international(cell::Cell, symprec=1e-8)\n\nReturn the space group type in Hermann–Mauguin (international) notation.\n\n\n\n\n\n","category":"function"},{"location":"api/#Spglib.get_schoenflies","page":"API","title":"Spglib.get_schoenflies","text":"get_schoenflies(cell::Cell, symprec=1e-8)\n\nReturn the space group type in Schoenflies notation.\n\n\n\n\n\n","category":"function"},{"location":"api/#Spglib.standardize_cell","page":"API","title":"Spglib.standardize_cell","text":"standardize_cell(cell::Cell; to_primitive=false, no_idealize=false, symprec=1e-5)\n\nReturn standardized cell.\n\nThe standardized unit cell is generated from an input unit cell structure and its symmetry found by the symmetry search. The choice of the setting for each space group type is as explained for get_dataset.\n\n\n\n\n\n","category":"function"},{"location":"api/#Spglib.find_primitive","page":"API","title":"Spglib.find_primitive","text":"find_primitive(cell::Cell, symprec=1e-5)\n\nFind the primitive cell of an input unit cell.\n\nThis function is now a shortcut of standardize_cell with to_primitive = true and no_idealize = false.\n\n\n\n\n\n","category":"function"},{"location":"api/#Spglib.refine_cell","page":"API","title":"Spglib.refine_cell","text":"refine_cell(cell::Cell, symprec=1e-5)\n\nReturn refined cell.\n\nThe standardized crystal structure is obtained from a non-standard crystal structure which may be slightly distorted within a symmetry recognition tolerance, or whose primitive vectors are differently chosen, etc. This function is now a shortcut of standardize_cell with to_primitive = false and no_idealize = false.\n\n\n\n\n\n","category":"function"},{"location":"api/#Spglib.niggli_reduce!","page":"API","title":"Spglib.niggli_reduce!","text":"niggli_reduce!(lattice::AbstractMatrix, symprec=1e-5)\n\nApply Niggli reduction to input basis vectors lattice and the reduced basis vectors are overwritten to lattice.\n\n\n\n\n\n","category":"function"},{"location":"api/#Spglib.delaunay_reduce!","page":"API","title":"Spglib.delaunay_reduce!","text":"delaunay_reduce!(lattice::AbstractMatrix, symprec=1e-5)\n\nApply Delaunay reduction to input basis vectors lattice and the reduced basis vectors are overwritten to lattice.\n\n\n\n\n\n","category":"function"},{"location":"api/#Spglib.get_multiplicity","page":"API","title":"Spglib.get_multiplicity","text":"get_multiplicity(cell::Cell, symprec=1e-8)\n\nReturn the exact number of symmetry operations. An error is thrown when it fails.\n\n\n\n\n\n","category":"function"},{"location":"api/#Spglib.get_ir_reciprocal_mesh","page":"API","title":"Spglib.get_ir_reciprocal_mesh","text":"get_ir_reciprocal_mesh(cell::Cell, mesh, is_shift=falses(3); is_time_reversal=true, symprec=1e-5)\n\nReturn k-points mesh and k-point map to the irreducible k-points.\n\nIrreducible reciprocal grid points are searched from uniform mesh grid points specified by mesh and is_shift. mesh stores three integers. Reciprocal primitive vectors are divided by the number stored in mesh with (0,0,0) point centering. The centering can be shifted only half of one mesh by setting 1 or true for each is_shift element. If 0 or false is set for is_shift, it means there is no shift. This limitation of shifting enables the irreducible k-point search significantly faster when the mesh is very dense.\n\nThe reducible uniform grid points are returned in reduced coordinates as grid_address. A map between reducible and irreducible points are returned as grid_mapping_table as in the indices of grid_address. The number of the irreducible k-points are returned as the return value.  The time reversal symmetry is imposed by setting is_time_reversal.\n\n\n\n\n\n","category":"function"},{"location":"api/#Spglib.get_version","page":"API","title":"Spglib.get_version","text":"get_version()\n\nObtain the version number of spglib.\n\nThis is the mergence of spg_get_major_version, spg_get_minor_version, and spg_get_micro_version in its C-API.\n\n\n\n\n\n","category":"function"},{"location":"installation/#Installation","page":"Installation","title":"Installation","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"Pages = [\"installation.md\"]\nDepth = 3","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"To install this package, first, you need to install a julia executable from its official website. Version v1.0.0 and above is required. This package may not work on v0.7 and below.","category":"page"},{"location":"installation/#Installing-Julia","page":"Installation","title":"Installing Julia","text":"","category":"section"},{"location":"installation/#on-macOS","page":"Installation","title":"on macOS","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"If you are using a Mac, and have Homebrew installed, open Terminal.app and type:","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"brew cask install julia","category":"page"},{"location":"installation/#on-Linux","page":"Installation","title":"on Linux","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"On Linux, the best way to install Julia is to use the Generic Linux Binaries. The JILL script does this for you. Just run","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"bash -ci \"$(curl -fsSL https://raw.githubusercontent.com/abelsiqueira/jill/master/jill.sh)\"","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"installs Julia into $HOME/.local/bin. This script also has a Python version, JILL.py. It can also be used on macOS.","category":"page"},{"location":"installation/#Installing-the-package","page":"Installation","title":"Installing the package","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"Now I am using macOS as a standard platform to explain the following steps:","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"Open Terminal.app, and type julia to start a Julia session.\nRun\njulia> using Pkg; Pkg.update(); Pkg.add(\"Spglib\")\nand wait for its finish.\nRun\njulia> using Spglib\nand have fun!\nWhile using, please keep this Julia session alive. Restarting may recompile the package and cost some time.","category":"page"},{"location":"installation/#Reinstall","page":"Installation","title":"Reinstall","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"In the same Julia session, run\njulia> Pkg.rm(\"Spglib\"); Pkg.gc()\nPress ctrl+d to quit the current session. Start a new Julia session and repeat the above steps.","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = Spglib","category":"page"},{"location":"#Spglib","page":"Home","title":"Spglib","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Spglib is a Julia wrapper of the C library spglib. It is used for finding and handling crystal symmetries. Thanks to Julia's binary artifact mechanism, the installation and usage of it should be smooth after Julia 1.3.","category":"page"},{"location":"","page":"Home","title":"Home","text":"There was already a package LibSymspg.jl, but it is no longer actively maintained. And it does not support the latest versions of spglib. It also has some different design decisions with this package, including, but not limited to, naming conventions, input types, and return types of functions.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The code is hosted on GitHub, with some continuous integration services to test its validity.","category":"page"},{"location":"#Manual-Outline","page":"Home","title":"Manual Outline","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n    \"installation.md\",\n    \"portability.md\",\n    \"api.md\",\n]\nDepth = 3","category":"page"},{"location":"#Index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"}]
}
