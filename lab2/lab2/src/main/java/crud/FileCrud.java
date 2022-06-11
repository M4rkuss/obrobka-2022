package crud;

import FileIO.FileIO;
import FileIO.FileIOInterface;
import footballers.Footballers;

public class FileCrud implements Lab2CrudInterface {
	
	FileIOInterface fio;

	public FileCrud() {
	this.fio = new FileIO();
	}

	@Override
	public Footballers readFootballers() {
		// TODO Auto-generated method stub
		return (Footballers) fio.loadFromFile();
	}

	@Override
	public void updateFootballers(Footballers footballers) {
		// TODO Auto-generated method stub
		fio.saveToFile(footballers);

	}
}