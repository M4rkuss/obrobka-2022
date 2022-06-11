package FileIO;

import footballers.Footballers;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Footballers footballers = new Footballers("Mock1", 23,"qwerty");
		FileIOInterface fio = new FileIO();
		fio.saveToFile(footballers);
		System.out.println((Footballers)fio.loadFromFile());

	}

}
